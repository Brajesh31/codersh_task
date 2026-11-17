# 🧰 Repository validation scripts

These scripts are part of documentation and release hygiene. They perform real checks and return a non-zero status when validation fails.

## validate_repo.py
Checks the required project paths, package scripts, employee JSON shape, unique IDs, privacy-safe sample email domains, excluded contact/compensation fields, and XML well-formedness of SVG assets.

Run:
```bash
python scripts/validate_repo.py
```

## validate_docs.py
Checks local Markdown links and image references, including links in the README and the documentation tree. External URLs and same-page anchors are not fetched.

Run:
```bash
python scripts/validate_docs.py
```

Both scripts use only the Python standard library. They are not substitutes for a Markdown renderer, browser test, or legal/privacy review.
