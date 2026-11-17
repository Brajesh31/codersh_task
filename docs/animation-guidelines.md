# 🎞️ Motion and animation guidelines

## 1. Current motion

The application uses a small number of transitions:
- Employee cards lift slightly on hover.
- The profile dialog backdrop fades in.
- The profile dialog enters with a short vertical movement.
- The loading state uses a small rotating indicator.
- Focus outlines and control states remain visible without motion.

## 2. Purposeful motion rules

Motion should explain an interaction or state change. It must not:
- Delay access to the directory or profile details.
- Make essential information appear only on hover.
- Flash, strobe, or use large repeated movement.
- Autoplay decorative content.
- Depend on color or animation alone to communicate an error or selected state.

Keep durations short and transitions subtle. Avoid large scale changes that can disorient users or cause layout shifts.

## 3. Reduced-motion support

The global stylesheet contains a `prefers-reduced-motion: reduce` rule that reduces animation and transition duration. Do not remove or override it casually.

When adding motion:
1. Identify the user benefit.
2. Keep the non-motion state fully understandable.
3. Provide a reduced-motion alternative.
4. Check that content remains visible when animations are disabled.
5. Verify that loading does not rely solely on the spinner.

## 4. Interaction states

Hover is not a substitute for focus. Every interactive control must have a clear keyboard focus state. If a hover animation is added to employee cards, the keyboard-visible focus state should provide an equivalent signal.

## 5. Verification checklist

- [ ] Enable the operating system's reduced-motion preference.
- [ ] Verify the directory and modal remain fully usable.
- [ ] Confirm the loading message is readable without watching the spinner.
- [ ] Confirm content does not flicker or disappear during state changes.
- [ ] Check that motion does not create horizontal overflow on narrow viewports.
- [ ] Check the dialog at browser zoom and with large text.

## 6. Future animation requests

Avoid adding a motion library for one or two small transitions. Reconsider only if the application grows into a multi-step workflow that has a concrete need for coordinated animation.
