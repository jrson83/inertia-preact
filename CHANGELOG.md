# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this
project adheres to [Semantic Versioning](https://semver.org/).

## [v1.0.0-beta.2.2](https://github.com/jrson83/inertia-preact/releases/tag/inertia-preact%401.0.0-beta.2.2) - 2022-12-11

### Added

- Added [@jrson83/inertia-preact-preset](https://github.com/jrson83/inertia-preact-preset) to `README.md`

### Removed

- Removed line breaks from `Link` warn message, for proper minification

### Fixed

- Fixed typo `reactApp` => `preactApp` in `createInertiaApp`

## [v1.0.0-beta.2.1](https://github.com/jrson83/inertia-preact/releases/tag/inertia-preact%401.0.0-beta.2.1) - 2022-12-10

### Fixed

- Fixed `TypeError: server.createServer is not a function`

## [v1.0.0-beta.2](https://github.com/jrson83/inertia-preact/releases/tag/inertia-preact%401.0.0-beta.2) - 2022-12-10

Adapter is based on `@inertiajs/react@1.0.0-beta.2`

### Added

- Added `server.js`
- Added missing types for `createServer` and `AppCallback`
- Added missing type for `router`
- Added missing type for `InertiaAppOptionsForCSR.progress`

### Changed

- Organized imports
- Updated build scripts
- Updated exports
- Changed Inertia.js dependency to `@inertiajs/core`
- Downgraded `microbundle` from `^0.15.1` to `^0.12.0`

### Removed

- Removed dependency: `@babel/plugin-transform-react-jsx`

## [v0.2.0](https://github.com/jrson83/inertia-preact/releases/tag/inertia-preact%400.2.0) - 2022-12-06

### Added

- Added `@types/node` dependency

### Changed

- Updated [README.md](README.md)
- Updated dependencies: `@babel/plugin-transform-react-jsx` `@inertiajs/inertia`
  `microbundle` `preact` `preact-render-to-string` `prettier`

### Removed

- Removed ESLint config
- Removed dependencies: `@yandeu/prettier-config` `eslint`
  `eslint-config-preact` `eslint-plugin-jest` `jest`

### Fixed

- `@types/node` should fix TypeScript error when using `resolvePageComponent`
  from `laravel-vite-plugin`

## [v0.1.0](https://github.com/jrson83/inertia-preact/releases/tag/inertia-preact%400.1.0) - 2022-01-22

- Initial release
