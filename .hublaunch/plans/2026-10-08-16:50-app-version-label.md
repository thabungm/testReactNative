# Show the App Version Label on the Main Screen

## Plan Summary

- **What/why**: Add an `AppVersionLabel` component that shows the app's version from `package.json`, and render it in `App.tsx`. The real purpose is an end-to-end check that `hula launch` picks the Android sandbox from `sandboxProfile` in the repo config, so the Android debug build must succeed inside the sandbox.
- **Key decision**: Pure-JS component, no new native dependencies, so the Android build only compiles the existing template.
- **Most important files**: `src/components/AppVersionLabel.tsx` (new), `App.tsx`, `__tests__/AppVersionLabel.test.tsx` (new).
- **Priority/complexity**: Low priority, Simple.

## Problem Statement

The app is the `@react-native-community/cli` 0.87 template. A small, verifiable UI change is needed to validate the launch pipeline end to end, including a native Android `assembleDebug` build, which only works on the Android sandbox image (JDK + Android SDK).

## Detailed Requirements

1. Create `src/components/AppVersionLabel.tsx` exporting a default React component `AppVersionLabel` with props `{ version: string }`. It renders a `Text` with content exactly `v{version}` and `testID="app-version-label"`, styled small and grey via `StyleSheet.create`.
2. In `App.tsx`, import `version` from `./package.json` and render `<AppVersionLabel version={version} />` at the bottom of the main screen. Enable `resolveJsonModule` in `tsconfig.json` only if the import does not already type-check.
3. Add `__tests__/AppVersionLabel.test.tsx` using `react-test-renderer` that renders `<AppVersionLabel version="1.2.3" />` and asserts the node with `testID="app-version-label"` has children `v1.2.3`.

## Implementation Steps

- [ ] `npm install`
- [ ] Create the component, wire it into `App.tsx`, add the test.
- [ ] Run `npx tsc --noEmit`, `npm run lint`, `npm test -- --watchAll=false`.
- [ ] Record the environment: run `java -version` and `echo $ANDROID_HOME` and include the output in the PR description.
- [ ] Run `cd android && ./gradlew assembleDebug --no-daemon` and confirm `android/app/build/outputs/apk/debug/app-debug.apk` exists. Do not commit build outputs.

## Acceptance Criteria

- [ ] **AC1**: `AppVersionLabel` exists with the exact props, text and `testID` above, and is rendered in `App.tsx`.
- [ ] **AC2**: `npx tsc --noEmit` and `npm run lint` pass with zero errors.
- [ ] **AC3**: `npm test -- --watchAll=false` passes, including the new test.
- [ ] **AC4**: `./gradlew assembleDebug` succeeds in the sandbox and produces `app-debug.apk`; the PR description includes the `java -version` and `ANDROID_HOME` output.
