# Contributing to 1% Better Everyday

Thanks for your interest in contributing! This document provides guidelines to help you get started.

## Getting Started

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/<your-username>/1per-Better-Everyday-with-sb.git`
3. **Install** dependencies: `pnpm install`
4. **Create** a branch: `git checkout -b feature/your-feature`

## Development Workflow

```bash
pnpm dev       # Start dev server at localhost:3000
pnpm build     # Verify production build
pnpm lint      # Run linter before committing
```

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation changes
- `style:` — formatting, missing semicolons, etc.
- `refactor:` — code change that neither fixes a bug nor adds a feature
- `test:` — adding or updating tests
- `chore:` — maintenance tasks

## Pull Request Process

1. Update the README.md if your change affects usage or setup
2. Ensure `pnpm build` and `pnpm lint` pass
3. Fill out the PR template completely
4. Link any related issues
5. Request a review from a maintainer

## Code Style

- **TypeScript** — use proper types, avoid `any`
- **Components** — use functional components with hooks
- **Styling** — use Tailwind CSS utility classes
- **Naming** — use descriptive names; components in PascalCase, utilities in camelCase

## Reporting Bugs

Use the [Bug Report](https://github.com/gitswagata1/1per-Better-Everyday-with-sb/issues/new?template=bug_report.yml) template. Include:

- Steps to reproduce
- Expected vs. actual behavior
- Browser and OS information
- Screenshots if applicable

## Suggesting Features

Use the [Feature Request](https://github.com/gitswagata1/1per-Better-Everyday-with-sb/issues/new?template=feature_request.yml) template. Describe:

- The problem you're trying to solve
- Your proposed solution
- Alternatives you've considered

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

---

Thank you for helping make 1% Better Everyday better for everyone!
