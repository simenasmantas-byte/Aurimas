# Aurimas Petrikas – NT

Vieno puslapio (one-page) profesionali NT svetainė. Statinis HTML/CSS/JS –
be karkasų, be kompiliavimo, be `npm`. Atsidaro dukart spustelėjus
`index.html` arba įkeliama į bet kurį hostingą nukopijavus visą aplanką.

---

## Struktūra

```
index.html                            puslapio karkasas ir sekcijos
assets/css/style.css                  dizaino sistema
assets/js/data.js                     ← VISAS KEIČIAMAS TURINYS
                                        (kontaktai, objektai, atsiliepimai, karjera)
assets/js/main.js                     navigacija, filtrai, modalas, forma
assets/img/                           portretas, favicon
assets/img/objektai/                  objektų nuotraukos
robots.txt

aurimas-petrikas-VIENAS-FAILAS.html   savarankiška versija siuntimui
build-vienas-failas.ps1               ją generuojantis skriptas
```

Sekcijų eiliškumas puslapyje: navigacija → hero → apie mane → kuo galiu būti
naudingas → kaip galiu padėti → patirtis → citata → objektai + paieška →
investuotojams → kontaktai → footer.

### Išjungtos skiltys

Šios skiltys pašalintos iš puslapio, bet **duomenys, CSS ir JS palikti** –
grąžinamos įrašius atgal kelias HTML eilutes (tikslios instrukcijos –
komentaruose `assets/js/data.js` faile):

| Skiltis | Duomenys |
|---|---|
| Karjeros kelias | `PROFILE.career` |
| Išsilavinimas | `PROFILE.education` |
| Atsiliepimai | `TESTIMONIALS` |
| Kaip dirbame (procesas) | – (buvo HTML) |
| Pagrindinis CTA | – (buvo HTML) |

---

## Ką keisti pirmiausia

Beveik viskas keičiama **tik `assets/js/data.js`** faile.

### 1. Teisinė informacija (BŪTINA prieš paleidimą)

`SITE.legal` objekte keturi laukai turi reikšmę `PLACEHOLDER – …`.
Puslapyje jie rodomi pilkai, su brūkšnine linija, o footeryje yra
paaiškinimas, kad tai vietos rezervavimo įrašai.

```js
legal: {
  entity:          'MB „Pavyzdys“',
  code:            '123456789',
  brokerage:       'UAB Ober-Haus nekilnojamasis turtas',
  businessAddress: 'S. Daukanto g. 3, 92123 Klaipėda',
  privacyUrl:      '/privatumo-politika.html',
  ...
}
```

Kol `privacyUrl` ir kiti dokumentų adresai tušti, footeryje jie rodomi kaip
neaktyvūs tekstai (be nuorodų). Įrašius adresą – automatiškai tampa nuorodomis.

> Svetainėje nėra nė vieno išgalvoto registro numerio, licencijos ar
> sertifikato. Nepridėkite jų, kol neturite patvirtintų duomenų.

### 2. Objektai

`PROPERTIES` masyvas. Kiekvienas objektas turi tuos pačius laukus
(`status`, `category`, `type`, `price`, `rooms`, `area`, `lot`, `images`, …).
Filtrai ir rūšiavimas veikia automatiškai – miestų ir tipų sąrašai
generuojami iš duomenų, todėl pridėjus naują miestą jis iškart atsiranda
paieškoje.

Norint prijungti CMS ar XML srautą, pakanka `PROPERTIES` pakeisti tokios
pačios struktūros masyvu – HTML ir CSS liečiami nebūna.

Nuotraukas dėkite į `assets/img/objektai/` ir nurodykite kelius
`cover` bei `images` laukuose.

### 3. Atsiliepimai

`TESTIMONIALS` masyvas. Šiuo metu – vienas realus, viešai paskelbtas
atsiliepimas (Dr. Willoweit, 2020-08-20). Rodomas lietuviškas vertimas,
po juo – originalas anglų kalba.

> Į šį masyvą dėkite tik realiai gautus atsiliepimus. Išgalvotų vardų
> ir tekstų nenaudoti.

### 4. Profesinis profilis (karjera, išsilavinimas)

`PROFILE` objektas: `career` (karjeros kelias), `education` (išsilavinimas),
`languages`, `topSkills`. Duomenys paimti iš LinkedIn profilio ir išversti
į lietuvių kalbą. Sekcija „Patirtis“ juos atvaizduoja automatiškai –
pridėjus naują įrašą į `career`, jis iškart atsiranda laiko juostoje.

Įrašas su `current: true` gauna akcento spalvos tašką prie datų
(žymi šiuo metu einamas pareigas).

### 5. Kontaktai ir nuorodos

`SITE` objekto viršuje. Telefonas, el. paštas, adresas, LinkedIn ir mygtuko
„Visi Aurimo objektai“ adresas. `instagram` / `facebook` palikti tuščius –
tuomet piktogramos footeryje nerodomos.

### 6. Logotipas

Logotipo failo nebuvo, todėl naudojamas **tipografinis žodinis ženklas**
(`AURIMAS PETRIKAS │ NT`). Gavus tikrą logotipą, `index.html` faile
pakeiskite `.brand` elemento vidų:

```html
<a class="brand" href="#top">
  <img src="assets/img/logo.svg" alt="Aurimas Petrikas" height="24">
</a>
```

Ženklas kartojasi dviejose vietose – navigacijoje ir footeryje.

---

## Kontaktų forma

Pagal nutylėjimą `SITE.formMode = 'mailto'` – paspaudus „Siųsti užklausą“
atsidaro vartotojo el. pašto programa su užpildytu laišku. Veikia be serverio.

Norint tikro siuntimo fone (Formspree, Web3Forms ar savas backend):

```js
formMode: 'endpoint',
formEndpoint: 'https://formspree.io/f/xxxxxxx'
```

Forma siunčia JSON su laukais `vardas`, `elpastas`, `telefonas`, `tema`, `zinute`.

---

## Nuotraukos

* **Portretas** – `assets/img/aurimas-petrikas.png`, **spalvota** iškirpta
  nuotrauka permatomu fonu. Fono keisti nereikia: pro permatomą sritį matosi
  tamsi svetainės plokštuma, todėl portretas savaime derinasi prie dizaino.
  Atspalvis reguliuojamas viena CSS eilute – `.hero__portrait { filter: … }`.
* **Objektų nuotraukos** – iš aktyvių skelbimų. **Jose matomas Ober-Haus
  vandenženklis.** Vandenženklis paliktas nepaliestas sąmoningai – jo
  šalinimas būtų svetimo ženklo naikinimas. Turint originalus be
  vandenženklio, tiesiog perrašykite failus tais pačiais pavadinimais.

---

## Dvi svetainės versijos

| Failas | Kam |
|---|---|
| `index.html` + `assets/` | Pagrindinė versija. Ją keliate į hostingą ir redaguojate. |
| `aurimas-petrikas-VIENAS-FAILAS.html` | Viskas viename faile (4,2 MB). Siuntimui paštu, „WeTransfer“, USB. |

> **SVARBU:** `index.html` veikia tik tada, kai šalia jo yra aplankas `assets/`.
> Nukopijavus vien `index.html` į kitą vietą, svetainė atsidarys be dizaino
> ir be nuotraukų. Norint nusiųsti vieną failą – naudokite
> `aurimas-petrikas-VIENAS-FAILAS.html`.

### Vieno failo versijos perkūrimas

Pakeitus turinį (`data.js`, tekstus, nuotraukas), vieno failo versiją
reikia sugeneruoti iš naujo:

```powershell
powershell -ExecutionPolicy Bypass -File build-vienas-failas.ps1
```

Skriptas įdeda CSS, JS ir visas nuotraukas (base64) tiesiai į HTML.

---

## Peržiūra ir talpinimas

Paprasčiausiai atidarykite `index.html` naršyklėje **iš projekto aplanko** –
viskas veikia iš karto (keliai reliatyvūs, JS nenaudoja `fetch`).

Talpinimui pakanka nukopijuoti aplanką į bet kurį statinį hostingą
(Netlify, Cloudflare Pages, GitHub Pages, įprastas serveris).

Prieš paleidimą `index.html` faile pakeiskite realiu domenu:

* `<link rel="canonical" href="https://aurimaspetrikas.lt/">`
* `robots.txt` eilutę `Sitemap:`

---

## Pastabos dėl turinio

* Visi svetainės faktai (karjera, išsilavinimas, specializacija, kalbos,
  kontaktai) paimti iš viešo Aurimo Petriko LinkedIn ir Ober-Haus profilių
  ir **nėra išgalvoti**.
* Skaičiai pateikiami tik tie, kurie yra viešai nurodyti: „20+ metų NT,
  bankininkystės ir finansų srityse“, „25+ specialistų komanda“,
  „nuo 2018 m.“. Sandorių kiekiai, pardavimų apimtys ar klientų skaičiai
  nenurodyti, nes tokių duomenų nebuvo pateikta – jų nepridėkite be
  patvirtinimo.
* Struktūriniai duomenys (`JSON-LD`) faile `index.html` aprašo tik
  patikrintus faktus. Nedėkite ten licencijų ar reitingų.

---

## Prieinamumas ir našumas

* Semantinė struktūra, viena `<h1>`, nuoseklūs antraščių lygiai.
* Visi laukai su `<label>`, visi paveikslėliai su `alt`.
* Kontrastas atitinka WCAG AA įprastam tekstui.
* `prefers-reduced-motion` išjungia animacijas.
* Nuotraukos su `loading="lazy"`, jokių išorinių bibliotekų –
  vienintelis išorinis resursas yra Google Fonts (Inter).
