#!/usr/bin/env python3
"""Validate essential repository files, package metadata, sample data, and visuals."""

from __future__ import annotations

import json
import math
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main() -> int:
    errors: list[str] = []
    required_paths = [
        "README.md", "LICENSE", "CODE_OF_CONDUCT.md", "CONTRIBUTING.md",
        "GOVERNANCE.md", "MAINTAINERS.md", "SECURITY.md", "SUPPORT.md",
        "CHANGELOG.md", "ROADMAP.md", "CITATION.cff", "AUTHORS.md",
        ".nvmrc", ".editorconfig", ".gitattributes", ".gitignore",
        ".gitleaks.toml", ".markdownlint-cli2.jsonc", "CODEOWNERS",
        ".github/ISSUE_TEMPLATE/bug_report.yml",
        ".github/ISSUE_TEMPLATE/feature_request.yml",
        ".github/ISSUE_TEMPLATE/documentation.yml",
        ".github/ISSUE_TEMPLATE/accessibility_report.yml",
        ".github/ISSUE_TEMPLATE/performance_issue.yml",
        ".github/ISSUE_TEMPLATE/config.yml",
        ".github/PULL_REQUEST_TEMPLATE.md",
        ".github/dependabot.yml",
        ".github/workflows/ci.yml",
        ".github/workflows/docs-validation.yml",
        ".github/workflows/codeql.yml",
        ".github/workflows/security-scan.yml",
        ".github/workflows/dependency-review.yml",
        ".github/workflows/lockfile-sync.yml",
        ".github/workflows/update-readme.yml",
        "package.json", "package-lock.json", "public/employeesData.json",
        "src/lib/employeeData.js", "tests/employeeData.test.js",
        "docs/README.md", "docs/repository-checklist.md",
        "docs/assets/project-banner.svg", "docs/assets/social-preview.svg",
        "docs/assets/architecture.svg", "docs/assets/application-flow.svg",
        "docs/assets/data-flow.svg", "docs/assets/deployment-flow.svg",
        "docs/assets/security-boundaries.svg",
        "docs/templates/README.md", "scripts/README.md",
        "scripts/validate_docs.py",
    ]

    for relative in required_paths:
        if not (ROOT / relative).is_file():
            errors.append(f"Missing required file: {relative}")

    package: dict = {}
    package_path = ROOT / "package.json"
    if package_path.exists():
        try:
            package = json.loads(package_path.read_text(encoding="utf-8"))
            for name in ("dev", "lint", "test", "build", "preview"):
                if name not in package.get("scripts", {}):
                    errors.append(f"package.json is missing script '{name}'")
        except (json.JSONDecodeError, OSError) as exc:
            errors.append(f"Cannot parse package.json: {exc}")

    lock_path = ROOT / "package-lock.json"
    if lock_path.exists():
        try:
            lock = json.loads(lock_path.read_text(encoding="utf-8"))
            root_entry = lock.get("packages", {}).get("")
            if lock.get("lockfileVersion") != 3:
                errors.append("package-lock.json must use lockfileVersion 3")
            if not isinstance(root_entry, dict):
                errors.append("package-lock.json is missing its root package entry")
            else:
                for field in ("name", "version", "dependencies", "devDependencies",
                              "optionalDependencies", "engines"):
                    if root_entry.get(field, {}) != package.get(field, {}):
                        errors.append(f"package-lock root '{field}' differs from package.json")
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
                forbidden = {"contact", "salary", "phone", "address"}
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
                        errors.append(f"{label} must have a non-empty string or finite numeric id")
                    else:
                        key = str(identifier)
                        if key in seen:
                            errors.append(f"Duplicate employee id: {key}")
                        seen.add(key)

                    for field in ("name", "email", "department"):
                        value = record.get(field)
                        if not isinstance(value, str) or not value.strip():
                            errors.append(f"{label} requires non-empty string '{field}'")

                    email = record.get("email")
                    if isinstance(email, str) and not email.lower().endswith("@example.invalid"):
                        errors.append(f"{label} email must use reserved @example.invalid domain")

                    for field in forbidden:
                        if field in record:
                            errors.append(f"{label} must not contain public field '{field}'")

                    if record.get("photo", ""):
                        errors.append(f"{label} must not use an external photo in the synthetic public fixture")
        except (json.JSONDecodeError, OSError) as exc:
            errors.append(f"Cannot parse public/employeesData.json: {exc}")

    asset_root = ROOT / "docs/assets"
    if asset_root.exists():
        for svg_path in asset_root.rglob("*.svg"):
            try:
                ET.parse(svg_path)
            except (ET.ParseError, OSError) as exc:
                errors.append(f"Invalid SVG {svg_path.relative_to(ROOT)}: {exc}")

    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        print(f"Repository validation failed with {len(errors)} error(s).")
        return 1

    print("Repository essentials, package/lockfile metadata, synthetic public data, and SVG assets validated.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
