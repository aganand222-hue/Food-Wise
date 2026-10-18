// Helpers shared by many pages. Load AFTER js/food-data.js.

const PHOTO_EXTS = ['jpg', 'jpeg', 'png', 'webp'];

function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
}

// "Veg Roll (1)" -> "Veg Roll"
function shortName(f) {
    return f.name.replace(/\s*\(.*\)\s*$/, '');
}

// ---------- Photos ----------
function placeholderSvg(label) {
    const svg =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">' +
        '<rect width="400" height="300" fill="#e3efe4"/>' +
        '<circle cx="200" cy="125" r="68" fill="#ffffff" stroke="#9cc4a0" stroke-width="6"/>' +
        '<circle cx="200" cy="125" r="42" fill="none" stroke="#b8d6bb" stroke-width="3"/>' +
        '<text x="200" y="250" font-family="Segoe UI, Arial, sans-serif" font-size="22" ' +
        'fill="#4d7a52" text-anchor="middle">' + esc(label) + '</text></svg>';
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// Order tried for every dish:
//   1. your own photo   images/foods/<name>.jpg (or .jpeg / .png / .webp)
//   2. the drawing      images/illustrations/<name>.svg
//   3. a plain plate with the dish name
function photoCandidates(slug) {
    return PHOTO_EXTS.map(function (e) { return 'images/foods/' + slug + '.' + e; })
        .concat(['images/illustrations/' + slug + '.svg']);
}

function imgFallback(el) {
    const list = photoCandidates(el.dataset.slug);
    const next = parseInt(el.dataset.next, 10);
    if (next < list.length) {
        el.dataset.next = next + 1;
        el.src = list[next];
    } else {
        el.onerror = null;
        el.src = placeholderSvg(el.dataset.label);
        el.classList.add('is-placeholder');
    }
}

function foodImg(f, cls) {
    return '<img class="' + (cls || 'food-img') + '" src="' + photoCandidates(f.img)[0] + '"' +
        ' alt="' + esc(shortName(f)) + '" loading="lazy"' +
        ' data-slug="' + f.img + '" data-next="1" data-label="' + esc(shortName(f)) + '"' +
        ' onerror="imgFallback(this)">';
}

// A row of photo tiles that link to the Search page. slugs = list of f.img values.
function renderFoodStrip(containerId, slugs) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.className = 'food-strip';
    el.innerHTML = slugs.map(function (s) {
        const f = foods.find(function (x) { return x.img === s; });
        if (!f) return '';
        return '<a class="strip-item" href="search.html?q=' + encodeURIComponent(shortName(f)) + '">' +
            foodImg(f, 'food-img') + '<span>' + esc(shortName(f)) + '</span></a>';
    }).join('');
}

// ---------- Price ----------
function priceHtml(f) {
    if (f.price !== null) return '<span class="price">\u20B9' + f.price + '</span>';
    return '<span class="price unconfirmed">Price to be confirmed</span>';
}

// ---------- Nutrition score (0-100) ----------
// A simple, transparent score built only from the nutrition table:
//   50 pts  protein per calorie   (5 g protein per 100 kcal earns full marks)
//   30 pts  low share of calories from fat (45% or more earns none)
//   20 pts  lightness             (350 kcal or less earns full marks, fading to 0 at 500 kcal)
// Items with under 2 g protein (e.g. cold drinks) have the score halved.
function healthScore(f) {
    const cal = f.calories || 1;
    const proteinPer100 = (f.protein / cal) * 100;
    const fatShare = (f.fat * 9) / cal;
    const protein = 50 * Math.min(proteinPer100 / 5, 1);
    const fat = 30 * (1 - Math.min(fatShare / 0.45, 1));
    const light = 20 * Math.max(0, Math.min(1, (500 - cal) / 150));
    let score = protein + fat + light;
    if (f.protein < 2) score *= 0.5;
    return Math.round(score);
}

function scoreLabel(score) {
    if (score >= 65) return 'Everyday pick';
    if (score >= 45) return 'Balanced';
    return 'Enjoy occasionally';
}
