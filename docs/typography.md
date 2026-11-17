# 🔤 Typography and readable content

## 1. Current type system

The application uses a system sans-serif stack. No custom font is downloaded by the app. This avoids additional font requests, external font availability failures, and a separate font-license requirement.

The visual hierarchy currently uses:
- Large page heading for the directory title.
- Small uppercase eyebrow text for context.
- Readable subtitle text beneath the heading.
- Medium-weight employee names.
- Smaller, muted email and metadata.
- Compact labels inside the profile dialog.

## 2. Content hierarchy

Use semantic HTML heading levels in document order. A card's employee name is content, not merely decoration. The dialog title should identify the selected person. Labels should be associated with their values and controls.

Do not skip heading levels solely to obtain a visual font size. Use CSS for size and semantic heading elements for document structure.

## 3. Readability rules

- Keep body text and controls at a comfortable size.
- Do not shrink essential employee or department information to fit the card.
- Let long email addresses and department labels wrap.
- Maintain enough line height for multi-line text.
- Use weight and spacing as well as color to establish hierarchy.
- Preserve browser zoom and text resizing.
- Avoid long all-uppercase paragraphs.
- Keep button labels short and action-oriented.

## 4. Font stack and external resources

Use the existing system stack unless a measured user need justifies a font change. If a third-party font is introduced, document the provider, request behavior, license, fallback stack, caching, and privacy implications.

## 5. Verification checklist

- [ ] Check the interface at 200% browser zoom.
- [ ] Check long names and emails with synthetic test values.
- [ ] Check narrow viewports without horizontal overflow.
- [ ] Check page heading and dialog title semantics.
- [ ] Check text contrast independently from font size and weight.
- [ ] Confirm that text remains readable with custom browser font settings.
