# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this
project adheres to [Semantic Versioning](https://semver.org/).

## [v1.0.0-beta.2] - 2022-12-09

### Added

- Added `server.js`

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
