$ErrorActionPreference = 'Stop'
$root = 'C:\Users\MantasS\Documents\GitHub\Aurimas'
$out  = Join-Path $root 'aurimas-petrikas-VIENAS-FAILAS.html'

function Read-Utf8($p) { [System.IO.File]::ReadAllText($p, [System.Text.Encoding]::UTF8) }

$html = Read-Utf8 (Join-Path $root 'index.html')
$css  = Read-Utf8 (Join-Path $root 'assets\css\style.css')
$data = Read-Utf8 (Join-Path $root 'assets\js\data.js')
$main = Read-Utf8 (Join-Path $root 'assets\js\main.js')

# ---- 1. Build data: URI map for every image -------------------------------
$mime = @{ '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.svg'='image/svg+xml' }
$assets = @{}
Get-ChildItem -Path (Join-Path $root 'assets\img') -Recurse -File | ForEach-Object {
  $ext = $_.Extension.ToLower()
  if (-not $mime.ContainsKey($ext)) { return }
  $rel = $_.FullName.Substring($root.Length + 1).Replace('\', '/')
  $b64 = [Convert]::ToBase64String([System.IO.File]::ReadAllBytes($_.FullName))
  $assets[$rel] = "data:$($mime[$ext]);base64,$b64"
}
Write-Output "Assets inlined: $($assets.Count)"

# ---- 2. JS asset map + path rewrite ---------------------------------------
$pairs = $assets.Keys | Sort-Object | ForEach-Object {
  '"' + $_ + '":"' + $assets[$_] + '"'
}
$assetMapJs = "/* Visos nuotraukos idetos i si faila (base64) */`nvar __ASSETS = {" +
              ($pairs -join ",`n") + "};`n"

$rewriteJs = @'

/* Vieno failo versija: objektu nuotrauku keliai pakeiciami idetais duomenimis */
(function () {
  function fix(s) { return (__ASSETS && __ASSETS[s]) ? __ASSETS[s] : s; }
  if (typeof PROPERTIES !== 'undefined') {
    PROPERTIES.forEach(function (p) {
      p.cover = fix(p.cover);
      if (p.images) { p.images = p.images.map(fix); }
    });
  }
})();
'@

# main.js resolves the portrait through __ASSETS on its own (PORTRAIT_SRC),
# so nothing to patch here.

# ---- 3. Image references in HTML attributes (MUST run before inlining JS,
#         otherwise the __ASSETS map keys get substituted too) --------------
$scriptTags = @{
  css  = '<link rel="stylesheet" href="assets/css/style.css">'
  data = '<script src="assets/js/data.js"></script>'
  main = '<script src="assets/js/main.js"></script>'
}
# protect the three tags from the path substitution below
$html = $html.Replace($scriptTags.css,  '@@CSS_SLOT@@')
$html = $html.Replace($scriptTags.data, '@@DATA_SLOT@@')
$html = $html.Replace($scriptTags.main, '@@MAIN_SLOT@@')

foreach ($k in $assets.Keys) {
  $html = $html.Replace($k, $assets[$k])
}

# ---- 4. Now inline CSS + JS ------------------------------------------------
$html = $html.Replace('@@CSS_SLOT@@',  "<style>`n" + $css + "`n</style>")
$html = $html.Replace('@@DATA_SLOT@@', "<script>`n" + $assetMapJs + $data + $rewriteJs + "`n</script>")
$html = $html.Replace('@@MAIN_SLOT@@', "<script>`n" + $main + "`n</script>")

# ---- 5. Mark it in the title comment --------------------------------------
$banner = "<!-- AURIMAS PETRIKAS - NT | Vieno failo versija.`n" +
          "     Visas CSS, JS ir nuotraukos idetos i si faila.`n" +
          "     Sita faila galima siusti pastu ar kopijuoti bet kur - jis veikia vienas. -->`n"
$html = $banner + $html

[System.IO.File]::WriteAllText($out, $html, (New-Object System.Text.UTF8Encoding($false)))

$size = [math]::Round((Get-Item $out).Length / 1MB, 2)
Write-Output "Wrote $out"
Write-Output "Size: $size MB"
Write-Output "Leftover 'assets/' refs: $(([regex]::Matches($html, 'assets/(css|js|img)/')).Count)"
