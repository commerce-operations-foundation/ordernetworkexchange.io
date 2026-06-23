# ordernetworkexchange.io

The onX (Order Network eXchange) site for the Commerce Operations Foundation.
Plain static, multi-page, deployed on Netlify from this repo's root.

## Structure

```
index.html            Home
brands.html           /brands      For Brands & Retailers (+ activation tool)
tech.html             /tech        For Technology Vendors (+ vendor-interest form)
integrators.html      /integrators For Systems Integrators
insights.html         /insights    Article index
insights/<slug>.html  /insights/<slug>  One page per article (real, shareable URLs)
membership.html       /membership  Membership + "Talk to the Foundation" form
404.html              Custom not-found page
assets/styles.css     All styles (shared)
assets/app.js         Shared behaviour (logo lockup, nav, parallax, marquee, marks)
assets/home.js        Home "how it works" animation
assets/brands.js      Activation tool
assets/onx-logo.svg   onX mark (also the favicon)
netlify.toml          Redirects (legacy .com -> .io), clean-URL rewrites, asset caching
build.js / build.pages.js   Static generator (see below)
```

This replaces the previous single-page app. Every page now has a real URL, the
browser Back button works, and any link is shareable. The old SPA is kept at
`_original-spa.html.bak` for reference.

## Editing & regenerating

Pages are generated from shared partials so the header, footer, and nav stay
consistent. To change shared chrome or content, edit `build.js` /
`build.pages.js`, then:

```
node build.js
```

…and commit the regenerated `.html` files. **No build step runs on Netlify** —
the committed HTML is what deploys. (If you'd rather Netlify build, set
`command = "node build.js"` under `[build]` in `netlify.toml`.)

Articles are generated from the `posts` array in `build.js`; bodies are
placeholder templates until the COF team writes real copy.

## Forms (Netlify Forms)

Three forms post to Netlify and are auto-detected (`data-netlify="true"`):

| Form name        | Page         | Purpose |
|------------------|--------------|---------|
| `onx-activation` | /brands      | Brand activation request (selected vendors + draft note + contact) |
| `onx-vendor`     | /tech        | Vendor interest / TSC track |
| `onx-membership` | /membership  | Membership / "Talk to the Foundation" |

### One-time Netlify dashboard setup (required to receive email)

1. **Site → Forms → Form notifications → Add notification → Email notification.**
   Set the recipient to your shared COF/onX inbox (e.g. the address you want
   monitored). Do this for each of the three forms.
2. In the same notification, set **Reply-to** to the form's `email` field, so
   when COF replies it reaches the submitter directly. (Item 4 reply-to.)
3. **Submitter copy / CC (item 4):** every form has a "Send me a copy" checkbox
   and captures the submitter's `email`. Netlify notifications go to fixed
   recipients only — to auto-send the submitter a copy you need either:
   - a Zapier/Make automation on "new form submission" that emails `{{email}}`, or
   - a `netlify/functions/submission-created.js` function using your email
     provider (SendGrid/Postmark/etc.) keyed off the `copy_me` field.
   Until one of those is wired, COF sees the "copy_me = yes" flag and can CC
   manually.

## Item 3 — real vendor contacts (action for COF)

The old tool drafted outreach to **fabricated** contacts (made-up names/emails).
That's been removed. The activation request now routes to the COF/onX inbox and
COF coordinates outreach to partners.

When a vendor has **agreed to monitor and follow up**, add them to
`vendorContacts` in `assets/brands.js` and flip `ROUTE_DIRECT = true` to surface
their coordination contact in the review step. Keep entries to vendors who have
actually opted in.

## Logo

The header lockup is the official **COF wordmark** + the **onX mark**
(`assets/onx-logo.svg`, extracted from commerceopsfoundation.org and verified
path-for-path). The COF wordmark currently loads from the foundation's
WordPress media. To make the site fully self-contained, drop
`Dark-COF-wordmark-horizontal-lime.png` into `assets/` and set `COF_WORDMARK`
at the top of `assets/app.js` to `/assets/Dark-COF-wordmark-horizontal-lime.png`.

## Domains

Primary: `https://ordernetworkexchange.io`. `orderexchangenetwork.com` 301s to
it (see `netlify.toml`).
