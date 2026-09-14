# Aurimas Petrikas – NT

Daugiapuslapinė profesionali NT svetainė. Statinis HTML/CSS/JS – be karkasų,
be kompiliavimo, be `npm`. Veikia atidarius `index.html` iš projekto aplanko
arba įkėlus visą aplanką į bet kurį hostingą.

---

## Puslapiai

| Failas | Puslapis | Turinys |
|---|---|---|
| `index.html` | Pagrindinis | Hero, skaičių juosta, objektų mygtukas, „NT ne tik gyvenimui“ |
| `apie-mane.html` | Apie mane | Citata, biografija, kompetencijos |
| `kuo-galiu-padeti.html` | Kuo galiu padėti | Nuotraukos juosta, 5 privalumai, 5 sritys |
| `susisiekti.html` | Susisiekti | Užklausos forma ir kontaktai |

**Objektai** nėra atskiras puslapis – meniu punktas ir visi mygtukai veda į
Ober-Haus profilį, kur sąrašas atsinaujina savaime.

---

## Struktūra

```
index.html
apie-mane.html
kuo-galiu-padeti.html
susisiekti.html

assets/css/style.css      dizaino sistema
assets/js/data.js         ← VISAS KEIČIAMAS TURINYS (kontaktai, teisinė info)
assets/js/main.js         navigacija, forma, pasirodymo efektai
assets/img/               nuotraukos ir favicon
robots.txt
```

---

## Ką keisti

### 1. Kontaktai ir nuorodos

`assets/js/data.js`, objektas `SITE`. Telefonas, el. paštas, adresas,
LinkedIn ir **Objektų mygtuko adresas** (`allListingsUrl`).

Objektų adresas HTML failuose įrašytas tiesiogiai (kad veiktų ir be
JavaScript), o `main.js` jį sinchronizuoja iš `data.js`. Pakanka pakeisti
vienoje vietoje – `data.js`.

`instagram` / `facebook` palikus tuščius, piktogramos footeryje nerodomos.

### 2. Teisinė informacija

`SITE.legal`. **Neužpildyti laukai (su žodžiu `PLACEHOLDER`) viešai
NErodomi** – kartu paslepiama ir antraštė. Tas pats su dokumentų nuorodomis:
kol `privacyUrl` ir kiti adresai tušti, nuorodos nerodomos.

Įrašius tikrą reikšmę, eilutė footeryje atsiranda automatiškai.

> Svetainėje nėra nė vieno išgalvoto registro numerio ar licencijos.
> Nepridėkite jų, kol neturite patvirtintų duomenų.

### 3. Navigacija ir footeris

Kartojasi visuose keturiuose HTML failuose (taip svetainė veikia be jokio
build'o ir be JavaScript). Keičiant meniu punktą, pakeiskite jį **visuose
keturiuose failuose**.

Aktyvus meniu punktas žymimas atributu `aria-current="page"`.

### 4. Nuotraukos

| Failas | Kur naudojama |
|---|---|
| `aurimas-petrikas.png` | Pagrindinio puslapio portretas |
| `klaipeda-uostas-biurai.jpg` | „NT sprendimai ne tik gyvenimui“ |
| `kuo-galiu-padeti-hero.avif` + `.jpg` | „Kuo galiu padėti“ viršaus juosta |

**Portretas** – spalvota iškirpta nuotrauka permatomu fonu, todėl savaime
derinasi prie svetainės fono. Atspalvis reguliuojamas viena CSS eilute –
`.hero__portrait { filter: … }`.

**„Kuo galiu padėti“ juosta** naudoja `<picture>`: naujos naršyklės ima
`.avif` (originalą), senesnės – `.jpg` (atsarginį). Keičiant pakanka užrašyti
abu failus ant viršaus tais pačiais pavadinimais.

> ⚠ Dabartinis `.avif` yra **626 × 626 px** – tai sumažinta peržiūros versija.
> Juosta rodoma ~1345 px pločio, todėl vaizdas išdidinamas ~2,1 karto ir
> dideliuose ekranuose atrodo minkštokai. Norint tikro ryškumo, reikia
> pilnos raiškos originalo (bent ~1600 px pločio) iš to paties šaltinio.

Keičiant nuotrauką svarbu, kad CSS turėtų `height: auto` – kitaip HTML
`height` atributas nustelbia `aspect-ratio` ir nuotrauka išsitempia.

### 5. Logotipas

Logotipo failo nebuvo, todėl naudojamas **tipografinis žodinis ženklas**
(`AURIMAS PETRIKAS │ NT`). Gavus tikrą logotipą, visuose keturiuose failuose
pakeiskite `.brand` elemento vidų:

```html
<a class="brand" href="index.html">
  <img src="assets/img/logo.svg" alt="Aurimas Petrikas" height="24">
</a>
```

Ženklas kartojasi navigacijoje ir footeryje.

---

## Kontaktų forma

Pagal nutylėjimą `SITE.formMode = 'mailto'` – paspaudus „Siųsti užklausą“
atsidaro vartotojo el. pašto programa. Veikia be serverio.

Norint tikro siuntimo fone (Formspree, Web3Forms ar savas backend):

```js
formMode: 'endpoint',
formEndpoint: 'https://formspree.io/f/xxxxxxx'
```

Forma siunčia JSON su laukais `vardas`, `elpastas`, `telefonas`, `tema`, `zinute`.

---

## Išjungtas turinys

Šie blokai pašalinti iš puslapių, bet **duomenys, CSS ir JS palikti** –
grąžinami įrašius atgal kelias HTML eilutes (instrukcijos – komentaruose
`assets/js/data.js` faile):

| Blokas | Duomenys |
|---|---|
| Objektų sąrašas su filtrais | `PROPERTIES` |
| Karjeros kelias | `PROFILE.career` |
| Išsilavinimas | `PROFILE.education` |
| Atsiliepimai | `TESTIMONIALS` |

---

## Talpinimas

Nukopijuokite visą aplanką į statinį hostingą (GitHub Pages, Netlify,
Cloudflare Pages, įprastą serverį).

Gavus tikrą domeną, `index.html` faile atkomentuokite `canonical` eilutę ir
papildykite `robots.txt` `Sitemap:` įrašu.

---

## Pastabos dėl turinio

* Visi faktai (karjera, išsilavinimas, specializacija, kalbos, kontaktai)
  paimti iš viešo LinkedIn ir Ober-Haus profilių – **nieko neišgalvota**.
* Skaičiai tik viešai nurodyti: „20+ metų“, „25+ komanda“, „nuo 2018 m.“.
  Sandorių kiekių ar pardavimų apimčių nėra – nepridėkite be patvirtinimo.
* Struktūriniai duomenys (`JSON-LD`) aprašo tik patikrintus faktus.

---

## Prieinamumas ir našumas

* Semantinė struktūra, viena `<h1>` kiekviename puslapyje, nuoseklūs
  antraščių lygiai.
* Visi laukai su `<label>`, visi paveikslėliai su `alt`.
* Kontrastas atitinka WCAG AA įprastam tekstui.
* `prefers-reduced-motion` išjungia animacijas.
* Nuotraukos su `loading="lazy"`, jokių išorinių bibliotekų –
  vienintelis išorinis resursas yra Google Fonts (Inter).
