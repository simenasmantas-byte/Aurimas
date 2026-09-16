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

### 3. Mobili kontaktų juosta

Telefone ir planšetėje (iki 900 px) apačioje kabo juosta su trimis mygtukais:
skambinti, rašyti el. laišką ir „Nemokama konsultacija“. Matoma visuose
puslapiuose, slenkant neišnyksta, atidarius meniu pasislepia.

Telefono ir el. pašto adresai imami iš `SITE` (`data.js`), tad keisti
reikia tik ten. Mygtuko tekstą ir nuorodą rasite kiekvieno puslapio
apačioje, prieš `<script>` eilutes (`.mobile-bar__cta`).

Kompiuteryje juosta nerodoma.

### 4. Navigacija ir footeris

Kartojasi visuose keturiuose HTML failuose (taip svetainė veikia be jokio
build'o ir be JavaScript). Keičiant meniu punktą, pakeiskite jį **visuose
keturiuose failuose**.

Aktyvus meniu punktas žymimas atributu `aria-current="page"`.

### 5. Nuotraukos

| Failas | Kur naudojama |
|---|---|
| `aurimas-petrikas.png` (+ `-720.png`) | Pagrindinio puslapio portretas |
| `klaipeda-uostas-biurai.jpg` | „NT sprendimai ne tik gyvenimui“ |
| `kuo-galiu-padeti-hero.jpg` (+ `-800.jpg`) | „Kuo galiu padėti“ viršaus juosta |
| `og-image.jpg` | Dalijimosi nuotrauka (Messenger, LinkedIn, Facebook) |

**Dalijimosi nuotrauka** (`og-image.jpg`, 1200 × 628 px) rodoma, kai svetainės
nuoroda siunčiama per žinutes ar socialinius tinklus. Ji nurodyta visuose
keturiuose puslapiuose kaip `og:image` ir `twitter:image`.

> Pakeitus nuotrauką kitokio dydžio, reikia pataisyti ir `og:image:width` bei
> `og:image:height` reikšmes – jos turi sutapti su tikrais matmenimis.
>
> Socialiniai tinklai nuotrauką kešuoja. Po pakeitimo seną vaizdą galima
> priverstinai atnaujinti per Facebook Sharing Debugger arba LinkedIn Post
> Inspector.

**Portretas** – 970 × 1024 px PNG su permatomu fonu (plius 720 px versija
telefonams per `srcset`). Kadangi fonas permatomas, portretas savaime
derinasi prie svetainės fono spalvos. Atspalvis reguliuojamas viena CSS
eilute – `.hero__portrait { filter: … }`.

> Keičiant portretą svarbu, kad PNG turėtų **permatomą foną** ir kad objektas
> siektų apatinį nuotraukos kraštą – hero sekcijoje jis remiasi į smėlio
> juostą. Tuščios eilutės apačioje sukurtų tarpą.

**„Kuo galiu padėti“ juosta** – 1536 × 1024 px (332 KB) plius sumažinta
800 px versija telefonams (98 KB). Naršyklė per `srcset` pati pasirenka
tinkamą. Kompiuteryje nuotrauka net sumažinama (0,88×), todėl ryški.

Kadravimą į juostą atlieka CSS. Kadro aukštis reguliuojamas viena eilute:

```css
.page-banner img { object-position: center 62%; }  /* mažiau % = aukščiau */
```

Keičiant nuotrauką pakanka užrašyti failus ant viršaus tais pačiais
pavadinimais (abu dydžius).

Keičiant nuotrauką svarbu, kad CSS turėtų `height: auto` – kitaip HTML
`height` atributas nustelbia `aspect-ratio` ir nuotrauka išsitempia.

### 6. Logotipas

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

Svetainė talpinama GitHub Pages, domenas **www.aurimas.pro**.

| Failas | Paskirtis |
|---|---|
| `CNAME` | Nurodo GitHub Pages domeną. **Netrinti** – be jo domenas nustos veikti. |
| `sitemap.xml` | Keturių puslapių žemėlapis paieškos sistemoms |
| `robots.txt` | Leidžia indeksuoti, nurodo sitemap |
| `.nojekyll` | Išjungia Jekyll apdorojimą GitHub Pages serveryje |

Keičiant domeną reikia pakeisti: `CNAME`, `sitemap.xml`, `robots.txt` ir
kiekvieno puslapio `canonical`, `og:url` bei `og:image` adresus.

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
