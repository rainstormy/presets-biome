# Changelog

This file documents all notable changes to this project. The format is based
on [Keep a Changelog](https://keepachangelog.com/en/1.1.0), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) with the
following exceptions:

- All releases, including minor and patch releases, may modify the presets in a
  way that causes Biome to raise new formatting and linting warnings that you
  must address.
- All releases, including minor and patch releases, may require you to upgrade
  Biome to a newer patch version to remain compatible with the presets.

## [Unreleased]
### Added
- Presets for Biome 2.3.0:
  - `@rainstormy/presets-biome/2.3`
  - `@rainstormy/presets-biome/2.3/nextjs`
  - `@rainstormy/presets-biome/2.3/react-router`
  - `@rainstormy/presets-biome/2.3/storybook`
  - `@rainstormy/presets-biome/2.3/vitest`

### Fixed
- Enable [useReactFunctionComponents](https://biomejs.dev/linter/rules/use-react-function-components)
  only in the `nextjs` and `react-router` presets, disabling it in the base
  preset.

## [2.0.6] - 2025-10-22
### Strictened
- Enable [noEmptySource](https://biomejs.dev/linter/rules/no-empty-source) in
  the base preset.

### Changed
- Upgrade Biome to 2.2.7.

## [2.0.5] - 2025-10-18
### Strictened
- Define pattern groups
  in [noRestrictedImports](https://biomejs.dev/linter/rules/no-restricted-imports)
  to normalise import statements and prevent importing stories and tests in
  production code.
- Enable [useDeprecatedDate](https://biomejs.dev/linter/rules/use-deprecated-date)
  in the base preset.

### Relaxed
- Disable [useTopLevelRegex](https://biomejs.dev/linter/rules/use-top-level-regex)
  and [useNumericSeparators](https://biomejs.dev/linter/rules/use-numeric-separators)
  in story decorators.
- Allow importing `devDependencies` in story decorators.

### Changed
- Upgrade Biome to 2.2.6.
- Promote import sorting of module mocks (`*.mocks.{ts,tsx}`) to the base
  preset.

### Fixed
- Enable [noExcessiveNestedTestSuites](https://biomejs.dev/linter/rules/no-excessive-nested-test-suites),
  [noDuplicateTestHooks](https://biomejs.dev/linter/rules/no-duplicate-test-hooks),
  [noExportsInTest](https://biomejs.dev/linter/rules/no-exports-in-test), and
  [noFocusedTests](https://biomejs.dev/linter/rules/no-focused-tests) only in
  the `vitest` preset, disabling them in the base preset.
- Recognise the `proxy.ts` filename in the `nextjs` preset.

## [2.0.4] - 2025-10-04
### Strictened
- Enable [noDeprecatedImports](https://biomejs.dev/linter/rules/no-deprecated-imports)
  and [noUnusedExpressions](https://biomejs.dev/linter/rules/no-unused-expressions)
  in the base preset.
- Enable [noReactForwardRef](https://biomejs.dev/linter/rules/no-react-forward-ref)
  in the `nextjs` and `react-router` presets.

### Changed
- Upgrade Biome to 2.2.5.

## [2.0.3] - 2025-09-10
### Strictened
- Enable [noDuplicateDependencies](https://biomejs.dev/linter/rules/no-duplicate-dependencies)
  in the base preset.

### Changed
- Upgrade Biome to 2.2.4.

## [2.0.2] - 2025-09-06
### Strictened
- Enable [noUselessCatchBinding](https://biomejs.dev/linter/rules/no-useless-catch-binding)
  and [useConsistentArrowReturn](https://biomejs.dev/linter/rules/use-consistent-arrow-return)
  in the base preset.

### Changed
- Upgrade Biome to 2.2.3.

## [2.0.1] - 2025-09-03
### Relaxed
- Increase the maximum complexity level in stories and unit tests to 3.
- Increase the maximum complexity level in module mocks and test fixtures such
  as fakes and stubs to 7.

### Fixed
- Enable [useHookAtTopLevel](https://biomejs.dev/linter/rules/use-hook-at-top-level)
  only in the `nextjs` and `react-router` presets, disabling it in the base
  preset.

## [2.0.0] - 2025-08-20
### Added
- Presets for Biome 2.2.0:
  - `@rainstormy/presets-biome/2.2`
  - `@rainstormy/presets-biome/2.2/nextjs`
  - `@rainstormy/presets-biome/2.2/react-router`
  - `@rainstormy/presets-biome/2.2/storybook`
  - `@rainstormy/presets-biome/2.2/vitest`

### Strictened
- Disallow non-route files in the `app` directory in the `nextjs` preset.

### Relaxed
- Allow regex literals anywhere in configuration files.

### Fixed
- Recognise the `forbidden.tsx`, `unauthorized.tsx`, and
  `instrumentation-client.ts` filenames in the `nextjs` preset.

### Removed
- **BREAKING:** Presets for Biome 1.9.4:
  - `@rainstormy/presets-biome/base`
  - `@rainstormy/presets-biome/nextjs`
  - `@rainstormy/presets-biome/react-router`
  - `@rainstormy/presets-biome/storybook`
  - `@rainstormy/presets-biome/vitest`

## [1.0.0] - 2025-01-26
### Added
- [MIT license](https://choosealicense.com/licenses/mit).
- Presets for Biome 1.9.4:
  - `@rainstormy/presets-biome/base`
  - `@rainstormy/presets-biome/nextjs`
  - `@rainstormy/presets-biome/react-router`
  - `@rainstormy/presets-biome/storybook`
  - `@rainstormy/presets-biome/vitest`

[unreleased]: https://github.com/rainstormy/presets-biome/compare/v2.0.6...HEAD
[2.0.6]: https://github.com/rainstormy/presets-biome/compare/v2.0.5...v2.0.6
[2.0.5]: https://github.com/rainstormy/presets-biome/compare/v2.0.4...v2.0.5
[2.0.4]: https://github.com/rainstormy/presets-biome/compare/v2.0.3...v2.0.4
[2.0.3]: https://github.com/rainstormy/presets-biome/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/rainstormy/presets-biome/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/rainstormy/presets-biome/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/rainstormy/presets-biome/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/rainstormy/presets-biome/releases/tag/v1.0.0
