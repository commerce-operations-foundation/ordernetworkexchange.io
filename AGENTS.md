# onX Website Repository Guidance

## Scope

These instructions apply to the entire repository.

## Project overview

- This is the static, multi-page website for the Order Network eXchange (onX), maintained by the Commerce Operations Foundation.
- Netlify publishes the repository root. There is no build command in `netlify.toml`, so committed HTML is the deployed output.
- The canonical site is `https://ordernetworkexchange.io`.

## Source of truth

- Treat `build.js` and `build.pages.js` as the source of truth for page structure, shared navigation, footer content, metadata, page copy, article data, and generated article pages.
- After changing either generator file, run `node build.js` and commit the resulting HTML files together with the source change.
- Do not hand-edit generated HTML when the same change belongs in the generator. Direct HTML edits are acceptable only when a file is demonstrably not generated.
- Edit shared presentation and behavior in `assets/styles.css`, `assets/app.js`, `assets/home.js`, and `assets/brands.js` as appropriate.
- Keep routing and deployment behavior in `netlify.toml`.

## Development workflow

1. Start from an up-to-date `origin/main` and work on a feature branch, normally using the `codex/` prefix.
2. Make the smallest focused change that satisfies the request.
3. Run `node build.js` whenever generator source changes.
4. Review `git diff` to confirm that generated output matches the source change and that unrelated files were not modified.
5. Preview affected pages at desktop and mobile widths when layout, navigation, forms, or styling changes.
6. Do not merge into `main` unless the user explicitly requests it.

## Validation

- Run `node --check build.js` and `node --check build.pages.js` after changing JavaScript generator code.
- Run `node build.js` before committing page or shared-template changes.
- Check browser console output and important links on affected pages when behavior changes.
- Preserve clean URLs and root-relative asset paths unless the deployment configuration is intentionally changing.

## Content and design conventions

- Write the product name as `onX` and the expanded name as `Order Network eXchange`.
- Preserve the Commerce Operations Foundation and onX brand treatment unless a task explicitly changes it.
- Keep shared header, navigation, footer, metadata, and calls to action consistent across pages.
- Maintain responsive behavior, semantic HTML, keyboard usability, visible focus states, useful alternative text, and accessible form labels.
- Do not introduce fabricated people, email addresses, customer claims, partner commitments, statistics, or testimonials.

## Forms, data, and security

- Preserve Netlify Forms requirements, including form `name`, `method`, `data-netlify`, honeypot fields, and hidden `form-name` inputs.
- Never commit credentials, access tokens, private contact lists, `.env` files, or other secrets.
- Do not add analytics, trackers, third-party scripts, new dependencies, or external data collection without explicit approval.
- Keep external links safe with appropriate `rel` attributes when they open a new tab.

## Code review rules

- Flag changes to generated HTML that are not represented in `build.js` or `build.pages.js`.
- Flag generator changes when regenerated HTML is missing from the same commit.
- Flag broken clean-URL rewrites, missing assets, malformed metadata, or navigation inconsistencies.
- Flag changes that can prevent Netlify form detection or alter submitted field names unintentionally.
- Flag exposed secrets, invented contact information, or unsupported public claims.
