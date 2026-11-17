#!/usr/bin/env python3
"""Validate repository essentials, demo data, and SVG assets."""

from __future__ import annotations

import json
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
        ".github/workflows/ci.yml",
        ".github/workflows/docs-validation.yml",
        ".github/workflows/codeql.yml",
        ".github/workflows/security-scan.yml",
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
                    for field in ("id", "name", "email", "department"):
                        if field not in record or record[field] in (None, ""):
                            errors.append(f"{label} is missing required field '{field}'")
                    identifier = str(record.get("id", ""))
                    if identifier in seen:
                        errors.append(f"Duplicate employee ID: {identifier}")
                    seen.add(identifier)
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

    print("Repository structure, package scripts, privacy-safe sample JSON, and SVG assets validated.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
