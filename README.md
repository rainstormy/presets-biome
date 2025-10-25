# Opinionated Presets for Biome

This package provides predefined, opinionated [Biome](https://biomejs.dev)
configurations carefully crafted for
modern [TypeScript](https://www.typescriptlang.org) projects with add-ons
for [Next.js](https://nextjs.org), [React Router](https://reactrouter.com),
[Storybook](https://storybook.js.org), and [Vitest](https://vitest.dev).

## Code style
The preset configurations apply the default formatting and enable most linting
rules in Biome with a few twists:

- **Locate source code in the `src` directory** to improve discoverability and
  scalability by simplifying glob patterns and giving all projects a consistent
  structure.
- **Use path aliases prefixed by `#`** to normalise all import statements, thus
  reducing diff churn and preserving compatibility with Node.js subpath imports.
- **Omit semicolons** and rely fully
  on [automatic semicolon insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)
  to reduce cognitive complexity and visual noise in the code. Using semicolons
  does not disable the behaviour of automatic semicolon insertion anyway. See
  also [Hacking Semicolons](https://slides.com/evanyou/semicolons) by Evan You.
- **Use the generic `Array<T>` type** instead of the shorthand `T[]` syntax to
  make arrays of union types cleaner and to remain consistent with other
  built-in types such as `Set<T>`, `Map<K, V>`, and `Promise<T>`.
- **Use the `type` alias syntax** instead of the `interface` syntax to improve
  flexibility with union types, intersection types, and generic wrapper types
  such as `Readonly<T>` and `Partial<T>`.
- **Access JSX component props directly on the `props` object** (including React
  components) instead of destructuring it to avoid duplicating the prop names in
  type declarations.
- **Use a top-down declaration order** to improve readability and reduce
  cognitive complexity by sticking to a predictable declaration order. See also
  the [Stepdown Rule](https://dzone.com/articles/the-stepdown-rule), originally
  described in Clean Code by Robert C. Martin (a.k.a. Uncle Bob).
- **Use `function` declarations** instead of `const` with arrow functions to
  improve type safety and to enable top-down declaration orders, as function
  declarations are hoisted.
- **Disallow importing `devDependencies` and test files in production code** to
  prevent accidental bundling of development dependencies and test data in
  production artefacts.
- **Use PascalCase for filenames** to reduce cognitive complexity by sticking to
  a simple naming convention that is consistent with type names and component
  names.

> [!NOTE]  
> Biome uses **tabs** for indentation to improve developers' accessibility
> through customisable indentation widths, to reduce the number of required
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
Create a [`biome.json`](https://biomejs.dev/reference/configuration)/
`biome.jsonc` file
and [extend](https://biomejs.dev/guides/configure-biome/#share-a-configuration-file)
`@rainstormy/presets-biome/2.2` to enable the opinionated formatting and linting
configuration in general:

```json
{
  "extends": [
    "@rainstormy/presets-biome/2.2"
  ]
}
```

Specify other options like `files` and custom `overrides` as usual. You can also
override the presets as needed. For example:

```json
{
  "$schema": "https://biomejs.dev/schemas/2.2.7/schema.json",
  "extends": [
    "@rainstormy/presets-biome/2.2"
  ],
  "files": {
    "includes": [
      ".github/**/*",
      ".vscode/**/*",
      "src/**/*",
      "*.{js,json,jsonc,ts}"
    ]
  },
  "javascript": {
    "globals": ["Android"]
  },
  "linter": {
    "rules": {
      "correctness": {
        "useImportExtensions": "off"
      }
    }
  },
  "overrides": [
    {
      "includes": ["src/**/*.tsx"],
      "linter": {
        "rules": {
          "correctness": {
            "noRestrictedElements": {
              "level": "warn",
              "options": {
                "elements": {
                  "a": "Use the 'Hyperlink' component instead of an 'a' element."
                }
              }
            }
          }
        }
      }
    },
    {
      "includes": ["src/**/Use*.tsx"],
      "linter": {
        "rules": {
          "style": {
            "useComponentExportOnlyModules": "off"
          }
        }
      }
    }
  ]
}
```

> [!TIP]  
> Explicitly specified options in `biome.json` take precedence over the presets
> in `extends`.

### [Next.js](https://nextjs.org)
Add `@rainstormy/presets-biome/2.2/nextjs` to the `extends` array to support the
app router and React components in Next.js apps:

```json
{
  "extends": [
    "@rainstormy/presets-biome/2.2",
    "@rainstormy/presets-biome/2.2/nextjs"
  ]
}
```

The `app` directory and the `instrumentation.ts` and `middleware.ts`/`proxy.ts`
files must reside in the `src` directory. React components and other files in
general must _not_ reside in the `app` directory, decoupling them from the
Next.js app router to improve the overall maintainability and scalability of the
project.

### [React Router](https://reactrouter.com)
Add `@rainstormy/presets-biome/2.2/react-router` to the `extends` array to
support file routes and React components in React Router apps:

```json
{
  "extends": [
    "@rainstormy/presets-biome/2.2",
    "@rainstormy/presets-biome/2.2/react-router"
  ]
}
```

The `routes` directory and the `root.tsx` and `routes.ts` files must reside in
the `src` directory.

### [Storybook](https://storybook.js.org)
Add `@rainstormy/presets-biome/2.2/storybook` to the `extends` array to support
the following kinds of files in Storybook (naming convention in parentheses):

- Stories based on
  the [Component Story Format](https://storybook.js.org/docs/api/csf) (CSF 3)
  (`*.stories.{ts,tsx}`)
- [Decorators](https://storybook.js.org/docs/writing-stories/decorators)
  (`*.decorators.{ts,tsx}`)

```json
{
  "extends": [
    "@rainstormy/presets-biome/2.2",
    "@rainstormy/presets-biome/2.2/storybook"
  ]
}
```

Add `.storybook/**/*` to the `files.includes` array to cover Storybook
configuration files:

```json
{
  "files": {
    "includes": [
      ".github/**/*",
      ".storybook/**/*",
      ".vscode/**/*",
      "src/**/*",
      "*.{js,json,jsonc,ts}"
    ]
  }
}
```

Stories must remain simple in terms of cognitive complexity, limiting the use of
conditional logic.

### [Vitest](https://vitest.dev)
Add `@rainstormy/presets-biome/2.2/vitest` to the `extends` array to support the
following kinds of files in Vitest (naming convention in parentheses):

- Unit test suites (`*.tests.{ts,tsx}`)
- Test fixtures such as test data, stubs, and utilities (`*.fixtures.{ts,tsx}`)
- [Module mocks](https://vitest.dev/guide/mocking#modules) (`*.mocks.{ts,tsx}`)

```json
{
  "extends": [
    "@rainstormy/presets-biome/2.2",
    "@rainstormy/presets-biome/2.2/vitest"
  ]
}
```

To reduce the likelihood of buggy tests, test files must remain simple in terms
of cognitive complexity, limiting the use of conditional logic.

### Eject from the preset
Copy the relevant parts of the distributed JSON files (see links below) and
insert them directly into your `biome.json` file. Uninstall the
`@rainstormy/presets-biome` package and remove it from the `extends` array. Make
adjustments to the rules as needed.

- [Biome 2.2.7](https://github.com/rainstormy/presets-biome/blob/main/dist/2.2)
