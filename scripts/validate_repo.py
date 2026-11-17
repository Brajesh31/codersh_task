#!/usr/bin/env python3
"""Validate repository essentials, lockfile consistency, demo data, and SVG assets."""

from __future__ import annotations

import json
import math
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def fail(message: str) -> None:
    print(f"ERROR: {message}", file=sys.stderr)


def main() -> int:
    errors: list[str] = []
    required_paths = [
        "README.md",
        "LICENSE",
        "CODE_OF_CONDUCT.md",
        "CONTRIBUTING.md",
        "SECURITY.md",
        "SUPPORT.md",
        "CHANGELOG.md",
        "ROADMAP.md",
        "CITATION.cff",
        "AUTHORS.md",
        ".nvmrc",
        ".github/workflows/ci.yml",
        ".github/workflows/docs-validation.yml",
        ".github/workflows/codeql.yml",
        ".github/workflows/security-scan.yml",
        ".github/workflows/lockfile-sync.yml",
        ".github/dependabot.yml",
        "package.json",
        "package-lock.json",
        "public/employeesData.json",
        "src/lib/employeeData.js",
        "tests/employeeData.test.js",
        "docs/README.md",
        "docs/assets/project-banner.svg",
        "docs/assets/architecture.svg",
        "docs/assets/application-flow.svg",
        "docs/assets/data-flow.svg",
        "scripts/validate_docs.py",
    ]

    for relative in required_paths:
        if not (ROOT / relative).exists():
            errors.append(f"Missing required path: {relative}")

    package: dict = {}
    package_path = ROOT / "package.json"
    if package_path.exists():
        try:
            package = json.loads(package_path.read_text(encoding="utf-8"))
            scripts = package.get("scripts", {})
            for name in ("dev", "lint", "test", "build", "preview"):
                if name not in scripts:
                    errors.append(f"package.json is missing the '{name}' script")
        except (json.JSONDecodeError, OSError) as exc:
            errors.append(f"Cannot parse package.json: {exc}")

    lock_path = ROOT / "package-lock.json"
    if lock_path.exists():
        try:
            lock = json.loads(lock_path.read_text(encoding="utf-8"))
            lock_root = lock.get("packages", {}).get("")
            if lock.get("lockfileVersion") != 3:
                errors.append("package-lock.json must use lockfileVersion 3")
            if not isinstance(lock_root, dict):
                errors.append("package-lock.json is missing its root package entry")
            else:
                if package and lock_root.get("name") != package.get("name"):
                    errors.append("package-lock root name does not match package.json")
                if package and lock_root.get("version") != package.get("version"):
                    errors.append("package-lock root version does not match package.json")
                for field in ("dependencies", "devDependencies", "optionalDependencies", "engines"):
                    if lock_root.get(field, {}) != package.get(field, {}):
                        errors.append(f"package-lock root '{field}' does not match package.json")
        except (json.JSONDecodeError, OSError) as exc:
            errors.append(f"Cannot parse package-lock.json: {exc}")

    data_path = ROOT / "public/employeesData.json"
    if data_path.exists():
        try:
            data = json.loads(data_path.read_text(encoding="utf-8"))
            if not isinstance(data, list):
                errors.append("Employee data must be a JSON array")
            else:
                seen: set[str] = set()
                for index, record in enumerate(data):
                    label = f"Employee record at index {index}"
                    if not isinstance(record, dict):
                        errors.append(f"{label} must be an object")
                        continue

                    identifier = record.get("id")
                    valid_id = (
                        isinstance(identifier, str) and bool(identifier.strip())
                    ) or (
                        isinstance(identifier, (int, float))
                        and not isinstance(identifier, bool)
                        and math.isfinite(identifier)
                    )
                    if not valid_id:
                        errors.append(f"{label} must have a non-empty string or finite numeric ID")
                    else:
                        identifier_key = str(identifier)
                        if identifier_key in seen:
                            errors.append(f"Duplicate employee ID: {identifier_key}")
                        seen.add(identifier_key)

                    for field in ("name", "email", "department"):
                        value = record.get(field)
                        if not isinstance(value, str) or not value.strip():
                            errors.append(f"{label} must have a non-empty string '{field}'")

                    email = record.get("email")
                    if isinstance(email, str) and not email.lower().endswith("@example.invalid"):
                        errors.append(f"{label} must use the reserved @example.invalid domain")

                    for private_field in ("contact", "salary", "phone", "address"):
                        if private_field in record:
                            errors.append(f"{label} must not include '{private_field}' in the public sample")

                    if record.get("photo", ""):
                        errors.append(f"{label} must use the local initials fallback in the privacy-safe demo")
        except (json.JSONDecodeError, OSError) as exc:
            errors.append(f"Cannot parse public/employeesData.json: {exc}")

    for svg_path in (ROOT / "docs/assets").rglob("*.svg") if (ROOT / "docs/assets").exists() else []:
        try:
            ET.parse(svg_path)
        except (ET.ParseError, OSError) as exc:
            errors.append(f"Invalid SVG {svg_path.relative_to(ROOT)}: {exc}")

    if errors:
        for error in errors:
            fail(error)
        print(f"Repository validation failed with {len(errors)} error(s).")
        return 1

    print("Repository structure, package scripts, lockfile consistency, privacy-safe sample JSON, and SVG assets validated.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
