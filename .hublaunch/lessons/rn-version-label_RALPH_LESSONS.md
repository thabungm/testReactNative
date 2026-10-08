# HubLaunch Lessons Learned

This file persists context across agent sessions. Update it as you work.

## Current Status
- Phase: COMPLETE ✅ — all acceptance criteria met.
- Last action: Android assembleDebug succeeded, APK produced.
- Blockers: None.

## Key Discoveries
- `resolveJsonModule` is ALREADY enabled in the base config
  (`node_modules/@react-native/typescript-config/tsconfig.json`), so
  `import { version } from './package.json'` type-checks with no tsconfig change needed.
- `react-test-renderer`'s `root.findByProps({testID})` returns the composite/outer
  test instance whose `children` are nested test-instance objects (join -> "[object Object]"),
  NOT the raw text strings. Use `tree.toJSON()` and walk the host-node tree; the host
  `Text` node's `children` is `["v","1.2.3"]`. Assert via join('') === 'v1.2.3'.
- Env: `java -version` = openjdk 21.0.12.1; `ANDROID_HOME` = /opt/android-sdk.
- Node is v20.20.2 (EBADENGINE warnings only, harmless).

## Solutions That Worked
- `npm install --no-audit --no-fund` (~20s).
- `npx tsc --noEmit` -> clean. `npm run lint` -> clean. `npm test -- --watchAll=false` -> 2/2 pass.
- `cd android && ./gradlew assembleDebug --no-daemon` -> BUILD SUCCESSFUL (~3m46s),
  APK at android/app/build/outputs/apk/debug/app-debug.apk (~122MB). Build outputs are gitignored.

## Things to Avoid
- Do NOT assert on `findByProps(...).children` directly for text content — it yields
  test-instance objects, not strings.

## Files Modified
- App.tsx (import version + AppVersionLabel, render at bottom of main screen)
- src/components/AppVersionLabel.tsx (new)
- __tests__/AppVersionLabel.test.tsx (new)

## Open Questions
- None.

## Next Steps
- Done. PR description should include java -version and ANDROID_HOME output (captured above).
