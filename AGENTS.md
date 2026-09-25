# Rena's Rentals repository instructions

Read this file and [HANDOFF_INDEX.md](HANDOFF_INDEX.md) at the start of every project task. Follow the handoffs relevant to the task. These instructions apply to all files in this repository.

## IMPORTANT — image asset handling

**Never encode images in base64 unless the client specifically asks for base64 in that task.** This applies to screenshots, design references, property photos, logos, and every other image asset.

- Prefer normal image files and ordinary repository/file paths.
- If the available tooling cannot upload a binary image normally, **do not substitute a base64 blob or data URI**. Leave the image out, record that it still needs to be supplied, and ask the client to upload it in the appropriate chat/workspace.
- Do not place large encoded image strings in Markdown, JSON, JavaScript, CSS, PHP, HTML, handoffs, or repository source files unless the client explicitly requested that representation.

## Completion rule

A project task is not ready to be reported as complete until its durable result is available to the next chat through this GitHub repository.

1. Record what changed or was learned in a concise dated entry in `HANDOFF_INDEX.md`. Link any detailed handoff, code change, or pull request. Include the current status, verification, and any open item that matters to the next person.
2. Commit and push the entry and relevant files to GitHub. If work belongs in a pull request, push the branch and give the exact PR or branch URL and ref; do not imply the work is on `main` before it is merged.
3. Fetch or view the remote GitHub file after the write and verify that the next chat can read it. A local file, local commit, or unpushed branch does **not** satisfy this rule.
4. In the final report, give the exact repo-relative path, remote branch or PR, and GitHub link. Say plainly if publication or verification failed and label the handoff **unsynced/incomplete**.

This also applies to research, status reviews, and decisions when they produce information the next chat needs. If a user explicitly requires a read-only task, complete the review but mark the repository handoff as pending rather than claiming it was saved.

## Public-repository care

This repository is public. Do not publish credentials, private customer data, backup archives, database identifiers, private host details, or other sensitive operational material. Summarize such facts safely, keep the original private, and state where a future authorized collaborator can obtain it.

## Scope

The repository and these handoffs are the source of truth for **recorded project work**. Verify the current live website independently before claiming a live issue is fixed, deployed, or reproduced. Never infer current production status from an older handoff alone.

## Site-building spacing preference

For every website or interface task in this repository, start with a compact mobile layout. The client prefers **minimal vertical padding and short gaps**; do not use generous spacing as a default.

- Start with roughly 4–8px of vertical space between related card elements and 4–8px of vertical padding inside compact information rows. Add more only when the content demonstrably needs it.
- Inspect the rendered spacing, including margins and padding inherited from page builders or parent wrappers. Remove doubled gaps, spare outer frames, and decorative lines that make one card look like a box inside another.
- Check the narrow phone view before reporting completion. Compare the image-to-content gap, each card section, and the space below its actions. If a gap looks unnecessary, reduce it.
- Keep text readable and interactive controls at least 44px tall even when the surrounding layout is dense.

## WordPress editing boundary

For the Rena's Rentals property cards, **all visible property text must be editable in Beaver Builder**. Addresses, availability, dates, facts, location, descriptions, and button text must come from Beaver Builder fields. The Apply destination must also remain editable there. Images belong in the custom Listing Gallery plugin, edited through WordPress Dashboard → Listing Galleries.

CSS and JavaScript may control mobile layout, styling, carousel behavior, and counts derived from gallery images. Do not hardcode property-specific copy or fallback dates in the presentation plugin. Before reporting a card change complete, verify the mobile output reads the current Beaver Builder values and that the gallery still uses Listing Gallery.
