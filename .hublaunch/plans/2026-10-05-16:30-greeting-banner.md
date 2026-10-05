# Add a Greeting Banner Component to the React Native App

## Plan Summary

- **What/why**: Add a small `GreetingBanner` component to the bare React Native 0.87 app and render it in `App.tsx`, to exercise the full HubLaunch pipeline (type-check, lint, Jest, and an Android `assembleDebug` build) on a React Native repo.
- **Key decision**: Pure-JS component, no new native dependencies, so the Android build only has to compile the existing template.
- **Most important files**: `src/components/GreetingBanner.tsx` (new), `App.tsx`, `__tests__/GreetingBanner.test.tsx` (new).
- **Priority/complexity**: Low priority, Simple.

## Problem Statement

The app is the unmodified `@react-native-community/cli` 0.87 template. A trivial, verifiable UI change is needed to validate the end-to-end launch pipeline, including the Android debug build.

## Detailed Requirements

1. Create `src/components/GreetingBanner.tsx` exporting a default React component `GreetingBanner` with props `{ name: string }`. It renders a `View` containing a `Text` whose content is exactly `Hello, {name}!` and has `testID="greeting-banner-text"`. Use `StyleSheet.create` for a padded, centered style.
2. Render `<GreetingBanner name="HubLaunch" />` at the top of the main screen in `App.tsx`.
3. Add `__tests__/GreetingBanner.test.tsx` using `react-test-renderer` (already a dev dependency of the template) that renders `<GreetingBanner name="Ada" />` and asserts the text node with `testID="greeting-banner-text"` has children `Hello, Ada!`.

## Implementation Steps

- [ ] `npm install`
- [ ] Create the component, wire it into `App.tsx`, add the test.
- [ ] Run `npx tsc --noEmit`, `npm run lint`, `npm test -- --watchAll=false`.
- [ ] Run `cd android && ./gradlew assembleDebug --no-daemon` and confirm `android/app/build/outputs/apk/debug/app-debug.apk` exists.

## Acceptance Criteria

- [ ] **AC1**: `GreetingBanner` exists with the exact props, text, and `testID` above, and is rendered in `App.tsx`.
- [ ] **AC2**: `npx tsc --noEmit` and `npm run lint` pass with zero errors.
- [ ] **AC3**: `npm test -- --watchAll=false` passes, including the new test.
- [ ] **AC4**: `./gradlew assembleDebug` succeeds and produces `app-debug.apk`.