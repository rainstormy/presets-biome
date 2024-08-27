# Presets for Biome

This package provides predefined, opinionated [Biome](https://biomejs.dev)
configurations to be applied to
the [`extends`](https://biomejs.dev/guides/configure-biome/#share-a-configuration-file)
property in `biome.json`.

## Installation
Install the [`@biomejs/biome`](https://www.npmjs.com/package/@biomejs/biome)
and [`@rainstormy/presets-biome`](https://www.npmjs.com/package/@rainstormy/presets-biome)
packages:

```shell
npm install --save-dev @biomejs/biome @rainstormy/presets-biome
```
or
```shell
pnpm add --save-dev @biomejs/biome @rainstormy/presets-biome
```
or
```shell
yarn add --dev @biomejs/biome @rainstormy/presets-biome
```

## Usage
Create a [`biome.json`](https://biomejs.dev/reference/configuration) file and
extend `@rainstormy/presets-biome/base` to enable opinionated formatting and
linting.

For example:

```json
{
    "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
    "extends": [
        "@rainstormy/presets-biome/base"
    ]
}
```

### With Next.js
Extend `@rainstormy/presets-biome/nextjs` to adjust the linter to
support [Next.js](https://nextjs.org) apps using the app router:

For example:

```json
{
    "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
    "extends": [
        "@rainstormy/presets-biome/base",
        "@rainstormy/presets-biome/nextjs"
    ]
}
```

### With Storybook
Extend `@rainstormy/presets-biome/storybook` to adjust the linter to
support [Storybook](https://storybook.js.org) stories:

For example:

```json
{
    "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
    "extends": [
        "@rainstormy/presets-biome/base",
        "@rainstormy/presets-biome/storybook"
    ]
}
```

### With Vitest
Extend `@rainstormy/presets-biome/vitest` to adjust the linter to
support [Vitest](https://vitest.dev) test suites.

For example:

```json
{
    "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
    "extends": [
        "@rainstormy/presets-biome/base",
        "@rainstormy/presets-biome/vitest"
    ]
}
```

### Override settings
Specify the desired options like `files` and `overrides` as usual.

For example:

```json
{
    "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
    "extends": [
        "@rainstormy/presets-biome/base",
        "@rainstormy/presets-biome/nextjs",
        "@rainstormy/presets-biome/storybook",
        "@rainstormy/presets-biome/vitest"
    ],
    "files": {
        "ignore": ["public/", "terraform/"]
    },
    "javascript": {
        "formatter": {
            "semicolons": "always"
        }
    },
    "overrides": [
        {
            "include": ["src/app/**/*.tsx"],
            "linter": {
                "rules": {
                    "correctness": {
                        "useExhaustiveDependencies": {
                            "level": "error",
                            "options": {
                                "hooks": [
                                    { "name": "useWindowEvent", "stableResult": true }
                                ]
                            }
                        }
                    }
                }
            }
        }
    ]
}
```

### Eject from the preset
Copy the relevant parts of
the [JSON files in this package](https://github.com/rainstormy/presets-biome/tree/main/src)
and insert them directly into the `biome.json` file instead of extending the
presets. Make adjustments as needed.
