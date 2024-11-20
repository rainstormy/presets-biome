# Opinionated Presets for Biome

This package provides predefined, opinionated [Biome](https://biomejs.dev)
configurations to be applied to
the [`extends`](https://biomejs.dev/guides/configure-biome/#share-a-configuration-file)
property in `biome.json`.

## Code style
The preset configurations apply the default formatting and linting rules in
Biome with a few twists:

* **Locate source code in the `src` directory** to enable file globbing tools
  to discover source code easily and to give all projects a consistent
  structure.
* **Omit semicolons** and rely fully
  on [automatic semicolon insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)
  to reduce visual noise in the code. Using semicolons does not
  disable the behaviour of automatic semicolon insertion anyway.
* **Use the generic `Array<T>` type** instead of the shorthand `T[]` syntax to
  make arrays of union types cleaner and to remain consistent with other
  built-in types such as `Set<T>`, `Map<K, V>`, and `Promise<T>`.
* **Use PascalCase for filenames** in general to make the filenames consistent
  with type declaration names and component names and to reduce the cognitive
  load of having to consider multiple file naming conventions.

To adjust the linting rules to the appropriate context, please adhere to the
following additional file naming conventions:

* `*.config.(js|ts)` for configuration files in a Node.js- and ESM-based
  toolchain.
* `*.stories.(ts|tsx)` for CSF3-based stories
  in [Storybook](https://storybook.js.org).
* `*.tests.(ts|tsx)` for unit test suites in [Vitest](https://vitest.dev).
* `*.testdata.(ts|tsx)` for arbitrary test data imported by unit test files.
* `*.mock.(ts|tsx)` for [module mocks](https://vitest.dev/guide/mocking#modules)
  in Vitest.

> [!NOTE]  
> Biome uses **tabs** for indentation to gain accessibility by making the
> indentation width customisable per developer, to reduce the number of required
> keystrokes, and to reduce the file sizes.

## Installation
Install the [`@biomejs/biome`](https://www.npmjs.com/package/@biomejs/biome)
and [`@rainstormy/presets-biome`](https://www.npmjs.com/package/@rainstormy/presets-biome)
packages with the package manager of your choice:

```shell
npm install --save-dev @biomejs/biome @rainstormy/presets-biome
```
```shell
pnpm add --save-dev @biomejs/biome @rainstormy/presets-biome
```
```shell
yarn add --dev @biomejs/biome @rainstormy/presets-biome
```

## Usage
Create a [`biome.json`](https://biomejs.dev/reference/configuration) file and
extend `@rainstormy/presets-biome/base` to enable opinionated formatting and
linting.

In addition to this, you can extend some of the following configurations to
refine the Biome settings for your project:

| Configuration                         | Description                                                                   |
|---------------------------------------|-------------------------------------------------------------------------------|
| `@rainstormy/presets-biome/nextjs`    | Adds support for app router-based [Next.js](https://nextjs.org) apps.         |
| `@rainstormy/presets-biome/remix`     | Adds support for flat router-based [Remix](https://remix.run) apps.           |
| `@rainstormy/presets-biome/storybook` | Adds support for CSF3-based stories in [Storybook](https://storybook.js.org). |
| `@rainstormy/presets-biome/vitest`    | Adds support for unit test suites in [Vitest](https://vitest.dev).            |

You can override the predefined settings by specifying the desired options like
`files` and `overrides` as usual.

For example:

```json
{
    "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
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
                            "level": "warn",
                            "options": {
                                "hooks": [
                                    {
                                        "name": "useWindowEvent",
                                        "stableResult": true
                                    }
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
the [preset source files](https://github.com/rainstormy/presets-biome/tree/main/src)
and insert them directly into the `biome.json` file. Make adjustments as needed.
