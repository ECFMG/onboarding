Revamp the Docusaurus site at http://localhost:3000/onboarding to follow the
Intealth branding and visual rules in DESIGN.md. Make visual-only changes using
CSS and small presentation-focused JSX changes; do not restructure routes,
data, behavior, or unrelated code.

DESIGN.md is read-only and must never be edited. Use its exact tokens and
component-role mappings. Verify that each style is applied to the correct
semantic component and rendered location.

Treat the supplied reference layout as the visual acceptance target for the
application shell, hierarchy, density, spacing, and active-state treatment.
Before editing, map the existing rendered elements to their semantic roles:
application header, global brand, primary navigation, section/sidebar navigation,
content header, content banner, and page content. Preserve those roles, route
behavior, and document structure; do not invent a parallel navigation structure
or move content merely to imitate the reference.

The general shell should follow the reference: a thin full-width application
header across the top, visible brand treatment aligned within that header, a
narrow persistent navigation rail/sidebar below it, and a spacious white content
surface to the right with the page heading and controls at the top. Keep the
content area wide and orderly; do not turn the page into a centered oversized
hero, stack multiple competing headers, or allow navigation layers to overlap
the content. Preserve existing application utilities and route structure while
matching this overall hierarchy.

Use logo.png only as the browser tab/favicon preview. It must not be rendered as
a visible site logo in the header, navigation, sidebar, content, or any other
page element. Use banner.png, containing the original white Intealth wordmark,
as the visible site branding in the header position currently occupied by the
logo, scaled to fit the header without making it oversized. Do not use the
banner as a content hero or duplicate it elsewhere.

The active menu item must use the selected-navigation treatment defined in
DESIGN.md, with readable text. The active treatment must come from the current
route and apply only to the matching semantic navigation item; inactive items
must retain their neutral treatment. Preserve both assets' proportions and
transparency; do not recolor, add a white rectangle, edit the wordmark, swap
asset roles, duplicate branding, or overlap shell layers.

Before returning, compare before/after screenshots at the same viewport. Confirm
the shell hierarchy, component identity, asset placement, active state, and
content density match the reference rather than relying on visual similarity
between unrelated components. Acceptance requires: banner visible in the
header, logo absent from the visible page, a thin full-width header, a narrow
navigation rail, aligned content to its right, only the current item using the
selected-menu treatment defined in DESIGN.md, neutral inactive items, no overlap or overflow,
and an orderly layout at the existing viewport. Do not set, resize, or otherwise
change the browser viewport or screen size; work with the dimensions already
provided by the headed session.

The agents own the application server lifecycle; I will not start it manually.
Before browser verification, check whether the site is reachable. If it is not,
start the development server detached with `nohup yarn start >
/tmp/onboarding-docusaurus.log 2>&1 &`; never run `yarn start` in the foreground.
Poll for port 3000 for at most 60 seconds, then inspect the log and report the
failure if it is still unavailable. Reuse a healthy server instead of starting
a duplicate. If the application server crashes, restart it using the same
detached command. Use the installed headed
agent-browser session named onboarding-desktop. At workflow startup, close only
that named session once if it already exists, then open a fresh headed session so
a new visible browser window is created. Reuse that headed session for all
inspection; do not close it during the workflow. If it later crashes or becomes
cramped, close only that named session and reopen it with `agent-browser
--session onboarding-desktop open --headed http://localhost:3000/onboarding`;
keep `--headed` before the URL. Run the build and relevant tests as needed,
but do not commit or push. Follow the configured single review cycle and stop
after the feedback implementation, with no additional review loop.
