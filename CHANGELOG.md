# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2024-12-05

### Added

- Added a "Test Status Badge" section in `README.md` to explain how to display the status of GitHub Actions workflows for the user's repository.
- Included an example URL format and instructions for customizing the badge.

## [0.1.1] - 2024-12-05

### Added

- Included a new section in `README.md` explaining the absence of `package-lock.json` and how users can generate it for their environment.

### Changed

- Removed `package-lock.json` from the repository to ensure compatibility across different platforms (e.g., macOS ARM64, Linux x64, Windows ARM64) and allow users to generate a lock file tailored to their environment.

## [0.1.0] - 2024-12-04

### Added

- Initial release of the template.
- Pre-configured development environment for:
  - **Nuxt 3**: Framework for building Vue.js applications.
  - **Vuetify**: Material Design component library.
  - **Vitest**: Unit testing framework for Vue components.
  - **ESLint**: Ensures code consistency and quality.
- Example component: `HelloWorld.vue`.
- Example test: `HelloWorld.spec.ts`.
- VS Code configuration:
  - Recommended extensions (`extensions.json`).
  - Pre-configured editor settings (`settings.json`).
- Support for development in a containerized environment (`.devcontainer/`).
- Scripts for:
  - Development server (`npm run dev`).
  - Building the project (`npm run build`).
  - Running tests (`npm run test` and `npm run test:coverage`).
  - Linting (`npm run lint` and `npm run lint:fix`).

---

## [Unreleased]

### Added
- Placeholder for future updates.
