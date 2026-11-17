# 👤 User personas

These are design personas for the sample interface, not researched descriptions of actual customers.

## 1. Team visitor
**Need:** Find a known colleague quickly.  
**Behavior:** Enters part of a name or email, then opens the matching profile.  
**Design support:** Search field, visible result count, compact cards.

## 2. Department explorer
**Need:** See the people grouped under a team label.  
**Behavior:** Chooses a department and scans the remaining cards.  
**Design support:** Department selector and empty state.

## 3. Keyboard-first visitor
**Need:** Use the directory without a mouse.  
**Behavior:** Tabs to the search field, selector, and card buttons, then closes the dialog with Escape.  
**Design support:** Semantic controls, focus styling, dialog focus handling.

## 4. Maintainer
**Need:** Add or correct sample records safely.  
**Behavior:** Edits the JSON file and checks required fields, unique IDs, and privacy exposure.  
**Design support:** Data contract, normalization tests, privacy guide.

The application does not currently distinguish authenticated roles or provide an administrator persona with special permissions.
