# CMS Preview Test Notes

This branch adds a test-only Decap CMS setup. It does not switch the live homepage to CMS content.

## Test URLs

After Netlify creates a deploy preview for this branch:

- Preview page: `/cms-preview.html`
- Editor: `/admin/`

## Netlify Setup Needed

In the Netlify project dashboard:

1. Enable Netlify Identity.
2. Set registration to invite-only for real testing.
3. Enable Git Gateway.
4. Invite the editor user.

The Decap config currently commits edits to:

`codex/test-decap-cms`

That is intentional for testing. If this is promoted to the production homepage later, change `admin/config.yml` to use:

`branch: main`

## Editable Test Content

The CMS edits this file:

`content/cms-preview.json`

The test preview page reads that file and renders:

- Hero copy
- Contact section copy
- Homes section copy
- Property card text
- Group options section
- Final CTA copy
- FAQ questions and answers

## Promotion Plan

If the test feels good, the next step is to make `index.html` use the same content file or split the content into production files like:

- `content/home.json`
- `content/properties.json`
- `content/faqs.json`

Do not change the CMS branch to `main` until the editing workflow is approved.
