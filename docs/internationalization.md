# 🌐 Internationalization and localization

## 1. Current implementation

The user interface is currently English-only. There is no locale selector, translation catalog, i18n framework, date/number localization layer, or translated content bundle. Do not advertise multilingual support.

The employee data fields are stored as text and displayed as supplied. Names, departments, and email values are not translated by the application.

## 2. Future localization requirements

Before adding another language:
- Identify target locales and their language tags.
- Choose a stable translation-key strategy.
- Keep user-facing strings out of deeply nested component logic.
- Define fallback locale behavior.
- Support Unicode names and labels.
- Avoid assuming name order, capitalization, or word boundaries.
- Use locale-aware sorting and formatting where dates/numbers are introduced.
- Test longer translated labels and right-to-left layouts if relevant.
- Verify keyboard, focus, and screen-reader output in translated UI.

## 3. Data considerations

Employee names are proper data values and should not be mechanically translated. Department labels may need a stable internal identifier plus localized display strings if the selector becomes data-driven. Email values remain unchanged.

## 4. Testing

For every supported locale, test all labels, buttons, status messages, empty/error states, and dialog text, long labels and narrow viewports, keyboard navigation and accessible names, fallback behavior for missing translation keys, Unicode input in search, and locale-aware sorting if sorting is introduced.

## 5. Scope decision

Localization is a future capability, not part of the current feature set. Add an i18n dependency only when there is a defined language requirement and a test plan.
