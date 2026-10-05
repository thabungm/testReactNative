## Project-Specific Verification Requirements

This project is **TestReactNative**, a bare React Native 0.87 app (TypeScript) with an
`android/` Gradle project. iOS is not built in the sandbox (Linux, no Xcode).

Install JS dependencies before any check: `npm install`.

### Mandatory Pre-Completion Checks

1. **Type-check**: `npx tsc --noEmit` — zero errors.
2. **Lint**: `npm run lint` — zero errors.
3. **Unit tests**: `npm test -- --watchAll=false` — must pass.
4. **Android debug build**: `cd android && ./gradlew assembleDebug` — must succeed and
   produce `android/app/build/outputs/apk/debug/app-debug.apk`.

<!-- RALPH_CHECK_COMMANDS
npm install --no-audit --no-fund
npx tsc --noEmit
npm run lint
# RALPH_CHECK_COMMANDS_END -->

<!-- RALPH_BUILD_COMMANDS
# Android debug APK. --no-daemon keeps the JVM inside the sandbox memory cap.
cd android && ./gradlew assembleDebug --no-daemon && ls -la app/build/outputs/apk/debug/app-debug.apk
# RALPH_BUILD_COMMANDS_END -->

<!-- RALPH_REGRESSION_COMMANDS
npm test -- --watchAll=false
# RALPH_REGRESSION_COMMANDS_END -->
