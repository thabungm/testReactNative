# HubLaunch Lessons Learned

This file persists context across agent sessions. Update it as you work.

## Current Status
- Phase: COMPLETE
- Last action: All ACs met — tsc, lint, jest (2 suites), and Android assembleDebug all green; APK produced.
- Blockers: None

## Key Discoveries
- Node in sandbox is v20.20.2; package.json engines want >=22. npm warns (EBADENGINE) but install/build still work.
- `react-test-renderer`: `testInstance.children` returns nested TEST INSTANCES (objects), not strings — joining them yields "[object Object]". Use `testInstance.props.children` instead, which for `Hello, {name}!` is the array `['Hello, ', name, '!']`. Flatten+join to assert the full string.
- Android `assembleDebug --no-daemon` takes ~3.5 min cold; succeeds, APK ~117MB.

## Solutions That Worked
- Pure-JS component `src/components/GreetingBanner.tsx` with `{ name: string }` prop, `testID="greeting-banner-text"`, StyleSheet padded/centered.
- Test asserts: `([] as unknown[]).concat(textNode.props.children).join('')` === `'Hello, Ada!'`.

## Things to Avoid
- Don't assert on `testInstance.children` for text content (returns instances, not strings).

## Files Modified
- src/components/GreetingBanner.tsx (new)
- __tests__/GreetingBanner.test.tsx (new)
- App.tsx (import + render <GreetingBanner name="HubLaunch" /> above NewAppScreen)

## Open Questions
- None

## Next Steps
- Done. Nothing outstanding.
