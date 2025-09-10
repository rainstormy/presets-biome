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

## [2.0.3] - 2025-09-10
- Upgrade Biome to 2.2.4.
- Enable [noDuplicateDependencies](https://biomejs.dev/linter/rules/no-duplicate-dependencies).

## [2.0.2] - 2025-09-06
### Changed
- Upgrade Biome to 2.2.3.
- Enable [noUselessCatchBinding](https://biomejs.dev/linter/rules/no-useless-catch-binding)
  and [useConsistentArrowReturn](https://biomejs.dev/linter/rules/use-consistent-arrow-return).

## [2.0.1] - 2025-09-03
### Changed
- Increase the maximum complexity level in stories and unit tests to 3.
- Increase the maximum complexity level in module mocks and test fixtures such
  as fakes and stubs to 7.

### Fixed
- Disable [useHookAtTopLevel](https://biomejs.dev/linter/rules/use-hook-at-top-level)
  in non-React contexts.

## [2.0.0] - 2025-08-20
### Added
- Presets for Biome 2.2.0:
  - `@rainstormy/presets-biome/2.2`
  - `@rainstormy/presets-biome/2.2/nextjs`
  - `@rainstormy/presets-biome/2.2/react-router`
  - `@rainstormy/presets-biome/2.2/storybook`
  - `@rainstormy/presets-biome/2.2/vitest`
- Recognise `forbidden.tsx`, `unauthorized.tsx`, and `instrumentation-client.ts`
  as files in the `nextjs` preset.

### Changed
- Disallow non-route files in the `app` directory in the `nextjs` preset.
- Allow regex literals anywhere in configuration files.

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

[unreleased]: https://github.com/rainstormy/presets-biome/compare/v2.0.3...HEAD
[2.0.3]: https://github.com/rainstormy/presets-biome/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/rainstormy/presets-biome/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/rainstormy/presets-biome/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/rainstormy/presets-biome/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/rainstormy/presets-biome/releases/tag/v1.0.0
