# FoodWise: Static Site (Netlify + Supabase)

This is a plain HTML/CSS/JS version of FoodWise, built so it can run on Netlify
(which only serves static files — no PHP). The feedback form now saves to a
free Supabase database instead of MySQL.

## What's new in this version

- **Pictures everywhere.** Menu cards, ingredients, nutrition table, search, comparison, ranking, calculator and the home, advantages and health pages all show a picture for every dish. Each dish has a drawn illustration (in `images/illustrations/`), and you can replace any of them with a real photo (see below).
- **Healthiest Items** (`healthiest.html`): every item ranked by a transparent nutrition score. The scoring rules are in `js/common.js` (`healthScore`) and explained on the page.
- **Calorie Calculator** (`calculator.html`): daily calorie range from age, gender and activity (using the table from the nutrition document), plus a plate builder that shows how much of the day a meal covers.
- **Compare Canteens** (`canteens.html`): price, calories, nutrition, charts, top picks and shared dishes. Works for any number of canteens.
- Nav now has **Learn** and **Tools** dropdowns, and the footer year shows correctly.

## Real photos instead of the drawings

Every dish already has a drawing, so nothing is blank. To use a real photo instead:

1. Open `images/foods/README.txt`. It lists the 32 file names (for example `misal-pav.jpg`, `veg-roll.jpg`).
2. Save the photo into `images/foods/` with exactly that name. `.jpg`, `.jpeg`, `.png` and `.webp` all work.
3. Dishes both canteens serve (vada pav, samosa, idli, burger) share one picture.
4. The site always prefers your photo over the drawing, so you can swap them one at a time.
5. Re-deploy to Netlify (drag the folder in again).

Tips: photograph from slightly above in daylight, keep the dish in the middle, and resize to about 800 px wide (under 300 KB) so pages stay fast.

## Filling in missing data

**Prices.** These items had no price on the menu boards, so they show "Price to be confirmed". Open `js/food-data.js`, find the item, and change `price: null` to the number (for example `price: 30`):

- Plain Maggi (1 packet) (MVLU College)
- Vada Pav (1) (MVLU College)
- Masala Dosa (1) (MVLU College)
- Daal Vada (2 pieces) (MVLU College)
- Kanda Bhaji (1 serving) (MVLU College)
- Puri Bhaji (1 serving) (MVLU College)
- Poha (1 plate) (MVLU College)
- Veg Fried Rice (1 plate) (MVLU College)
- Cold Drink (250 ml) (MVLU College)
- Sabudana Khichdi (1 plate) (MVLU College)
- Chai (1 cup) (MVLU College)

**A third canteen.**
1. In `js/food-data.js`, add the new canteen's items to the `foods` list with the same fields, using a new `college: "Name College"` value.
2. Give each item an `img` name. Reuse an existing one if the dish is the same (for example `vada-pav`).
3. Add the canteen name to the `colleges` list near the bottom of the file.
4. Optionally add its most-sold items to `topSellers`.

Every page (menu, nutrition, ingredients, healthiest, calculator, canteen comparison) picks it up automatically.

## One-time setup: Supabase (free database)

1. Go to https://supabase.com and sign up (free tier is enough).
2. Create a new project (pick any name, set a database password — you won't need the password day-to-day).
3. Once it's created, go to the **SQL Editor** in the left sidebar → **New query**.
4. Open `supabase-schema.sql` from this folder, copy its contents, paste into the SQL editor, and click **Run**.
   This creates the `feedback` table and the permissions that let your website read/write to it safely.
5. Go to **Project Settings** (gear icon) → **API Keys** (and **Data API** for the URL).
6. Copy the **Project URL** (looks like `https://xxxx.supabase.co`) and the **anon public** key (or the **Publishable key**, `sb_publishable_...`). Never copy a **Secret key**.
7. Open `js/supabase-config.js` in this folder and paste them in. Use the Project URL exactly as shown, ending in `.supabase.co` with nothing after it (no `/rest/v1/`), and use the **anon public** key, never the secret `service_role` key:
   ```js
   const SUPABASE_URL = "https://xxxxx.supabase.co";
   const SUPABASE_ANON_KEY = "eyJhbGciOiJ...";
   ```

## Deploy to Netlify

1. Go to https://app.netlify.com
2. Drag and drop this whole `foodwise-static` folder onto the Netlify dashboard (the "Deploy manually" drop zone).
3. Netlify gives you a live URL like `yoursite.netlify.app` — that's it, no build step needed.
4. To update the site later, make your changes locally and drag-and-drop the folder again.

## Opening the site on your computer

You can double-click `index.html` to open it in any browser. The header and footer are built into `js/include.js`, so no server is needed.
(The Supabase feedback form and results need an internet connection.)

## Files overview

- `index.html`, `menu.html`, `ingredients.html`, `nutrition.html`, `advantages.html`,
  `health.html`, `comparison.html`, `search.html`, `about.html` — content pages
- `feedback.html` — the survey form, saves to Supabase
- `results.html` — reads from Supabase, renders charts with Chart.js
- `js/food-data.js` — single source of truth for all menu/ingredient/nutrition data
- `js/common.js` — shared helpers: photos, nutrition score, price display
- `js/college-tabs.js` — renders the canteen tab switcher
- `images/foods/` — put your real food photos here (see `README.txt` inside)
- `images/illustrations/` — the drawn pictures used until a photo is added
- `healthiest.html`, `calculator.html`, `canteens.html` — the new tools
- `js/supabase-config.js` — **edit this** with your Supabase URL + key
- `js/include.js` — builds the shared nav and footer on every page. Edit the nav links here
- `supabase-schema.sql` — run once in Supabase's SQL Editor

## If something breaks

- Feedback form shows an error → check `js/supabase-config.js` has your real URL/key, and that you ran `supabase-schema.sql`
- Results page stuck on "Loading responses..." → open the browser console (F12) to see the actual error from Supabase
