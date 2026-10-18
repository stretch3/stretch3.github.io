LF=$(printf '\\\012_')
LF=${LF%_}
GA_TAG="<title>Stretch3\(ストレッチスリー\)</title>${LF}\
    <meta name=\"description\" content=\"Stretch3\(ストレッチスリー\)は自作の拡張機能を使えるように改造したScratch\(スクラッチ\)です。音声認識\(スピーチ トゥー スクラッチ\)、ポーズの認識\(ポーズネット トゥー スクラッチ\)、画像や音声を学習させることができる機械学習\(エムエル トゥー スクラッチ\)、ChatGPT\(チャットジーピーティー トゥー スクラッチ\)などが使えるいろいろな拡張機能があります。\" />${LF}\
${LF}\
    <!-- Open Graph (social preview) -->${LF}\
    <meta property=\"og:type\" content=\"website\" />${LF}\
    <meta property=\"og:site_name\" content=\"Stretch3\(ストレッチスリー\)\" />${LF}\
    <meta property=\"og:title\" content=\"Stretch3\(ストレッチスリー\) — Scratch改造版で自作拡張機能を使おう\" />${LF}\
    <meta property=\"og:description\" content=\"Stretch3\(ストレッチスリー\)は自作の拡張機能を使えるように改造したScratch\(スクラッチ\)です。音声認識、ポーズの認識、機械学習、ChatGPTなどが使えるいろいろな拡張機能があります。\" />${LF}\
    <meta property=\"og:url\" content=\"https://stretch3.github.io/\" />${LF}\
    <meta property=\"og:image\" content=\"https://stretch3.github.io/og-image.png\" />${LF}\
    <meta property=\"og:image:width\" content=\"1200\" />${LF}\
    <meta property=\"og:image:height\" content=\"630\" />${LF}\
    <meta property=\"og:image:alt\" content=\"Stretch3 — Scratch改造版で自作拡張機能を使おう\" />${LF}\
    <meta property=\"og:locale\" content=\"ja_JP\" />${LF}\
    <meta property=\"og:locale:alternate\" content=\"en_US\" />${LF}\
${LF}\
    <!-- Twitter Card -->${LF}\
    <meta name=\"twitter:card\" content=\"summary_large_image\" />${LF}\
    <meta name=\"twitter:title\" content=\"Stretch3\(ストレッチスリー\) — Scratch改造版で自作拡張機能を使おう\" />${LF}\
    <meta name=\"twitter:description\" content=\"自作の拡張機能を使えるように改造したScratch\(スクラッチ\)。音声認識、ポーズの認識、機械学習、ChatGPTなどが使える拡張機能がいろいろあります。\" />${LF}\
    <meta name=\"twitter:image\" content=\"https://stretch3.github.io/og-image.png\" />${LF}\
${LF}\
    <!-- Global site tag (gtag.js) - Google Analytics -->${LF}\
    <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-105345-37\"></script>${LF}\
    <script>${LF}\
      window.dataLayer = window.dataLayer \|\| [];${LF}\
      function gtag(){dataLayer.push(arguments);}${LF}\
      gtag('js', new Date());${LF}\
${LF}\
      gtag('config', 'UA-105345-38');${LF}\
    </script>${LF}\
"
mv build/index.html build/index.html_orig
sed -e "s|<title>Scratch 3.0 GUI</title>|${GA_TAG}|g" build/index.html_orig > build/index.html
