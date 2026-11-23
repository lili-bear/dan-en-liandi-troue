# Our Wedding Website ✦ how to edit & publish

## The files
| File | What it is |
|---|---|
| `config.js` | **Edit this one.** Names, date, venue, WhatsApp number, registry, dress code, story, FAQ, photos, colours, fonts, sections on/off. |
| `index.html` | The page layout. Edit the `<title>` and `og:` lines at the top (that's what WhatsApp shows in the link preview). |
| `style.css` | All styling. Colour/font variables are at the top (`:root`), but config.js overrides them. |
| `script.js` | The logic (RSVP, countdown, petals). Usually no need to touch. |
| `invite.html` | Your private **invite link maker**. |
| `images/` | Put your photos here. |

## 1. Fill in your details
Open `config.js` in any text editor (Notepad, TextEdit, or free VS Code) and replace everything marked `TODO`.
- **WhatsApp number**: digits only, international format. `082 123 4567` → `27821234567`.
- **Date**: `"2027-04-17T15:00:00+02:00"` drives the countdown; `dateText` is what guests read.

## 2. Add your photos
1. Resize photos to ~1600px wide (phones load them faster). JPG is best.
2. Copy them into the `images` folder, e.g. `images/us-forest.jpg`.
3. In `config.js` → `images`, change the names, e.g. `hero: "images/us-forest.jpg"`. Add or remove gallery lines freely.

## 3. Publish free on Netlify (get your link)
1. Go to **https://app.netlify.com/drop** and create a free account (keeps your site permanently).
2. Drag the whole **wedding-site folder** onto the page. You get a link like `https://random-name.netlify.app`.
3. Site settings → *Change site name* → e.g. `liandi-and-partner` → `https://liandi-and-partner.netlify.app`.
4. **To update later**: Deploys tab → drag the folder onto the "drag and drop" box again. Same link, new content.
5. Put that address in `config.js` → `siteUrl`, and in `index.html` change `og:image` to a full address like `https://liandi-and-partner.netlify.app/images/preview.jpg` (a JPG, for WhatsApp's preview picture). Re-upload.

## 4. Send personal invites (handles couples & no plus-ones)
Open `https://YOUR-SITE.netlify.app/invite.html`:
1. Type the name(s) exactly as you want them greeted, e.g. `Pieter & Anri`, choose seats (2).
2. Optionally enter their phone number → **Send on WhatsApp** opens a ready-written invite to them.

Their link looks like `...netlify.app/?to=Pieter%20%26%20Anri&seats=2`. The site then:
- greets them: *"Dierbare Pieter & Anri"*
- says *"Ons het met liefde 2 plekke vir julle gereserveer."*
- pre-fills their name in the RSVP and only lets them choose up to 2 people
- writes "ek" or "ons" (and "jy" or "julle") correctly.

The plain link (no `?to=`) still works — it reserves 1 seat (change `seatsWithoutPersonalLink`).

## 5. How RSVPs reach you
Guests choose *Ja, met vreugde / Ongelukkig nie* and tap **Stuur my antwoord op WhatsApp**. Their WhatsApp opens with a message to you, e.g.
> Pieter & Anri: Ons kom baie graag na julle troue! 🌹 (2 kom)
> Dieetvereistes: vegetaries

They just tap send. Edit the wording in `config.js` → `rsvp.messages`.
*Note: a website can't send WhatsApps by itself, so the guest must tap send. Keep a list as replies arrive.*

## Handy settings
- Turn sections off: `config.js` → `show` (e.g. `gallery: false`).
- Change colours: `config.js` → `theme`.
- Lace edges: add `lace-top` / `lace-bottom` to an ivory section's class in `index.html`.
