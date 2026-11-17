#!/usr/bin/env python3
"""Check relative Markdown links and image references without network access."""

from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
LINK_PATTERN = re.compile(r"!?(?:\[[^\]]*\])\((?:<([^>]+)>|([^\s)]+))(?:\s+[\"'][^)]*[\"'])?\)")


def markdown_files() -> list[Path]:
    files = [ROOT / "README.md"]
    files.extend((ROOT / "docs").rglob("*.md"))
    files.extend((ROOT / ".github").rglob("*.md"))
    return sorted(path for path in files if path.is_file())


def destination_from_match(match: re.Match[str]) -> str:
    return match.group(1) or match.group(2) or ""


def main() -> int:
    errors: list[str] = []
    checked_links = 0

    for markdown_path in markdown_files():
        in_fence = False
        for line_number, line in enumerate(
            markdown_path.read_text(encoding="utf-8").splitlines(), start=1
        ):
            if line.lstrip().startswith("```") or line.lstrip().startswith("~~~"):
                in_fence = not in_fence
                continue
            if in_fence:
                continue

            for match in LINK_PATTERN.finditer(line):
                destination = destination_from_match(match).strip()
                if not destination:
                    continue
                if destination.startswith(("#", "http://", "https://", "mailto:", "tel:", "data:")):
                    continue

                checked_links += 1
                clean_destination = unquote(destination.split("#", 1)[0].split("?", 1)[0])
                if not clean_destination:
                    continue

                target = (markdown_path.parent / clean_destination).resolve()
                try:
                    target.relative_to(ROOT)
                except ValueError:
                    errors.append(
                        f"{markdown_path.relative_to(ROOT)}:{line_number}: link escapes repository: {destination}"
                    )
                    continue

                if not target.exists():
                    errors.append(
                        f"{markdown_path.relative_to(ROOT)}:{line_number}: broken local link: {destination}"
                    )

    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        print(f"Documentation validation failed: {len(errors)} broken link(s).")
        return 1

    print(f"Documentation validation passed: {checked_links} local links checked.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
