#!/bin/sh
# 言語メニューに「日本語（ふりがな付き）」を追加する。scratch-gui (v3.6.18) の checkout のルートで実行する。
# champierre/furi-scratch (scratch-editor 向け) を scratch-gui v3.6.18 向けに移植したもの。
set -e

DIR=$(cd "$(dirname "$0")" && pwd)
FURIFONT_VERSION=v0.5.0
# webpack 4 には woff2 の loader がないため、static/ に置いてそのままコピーさせる
FONT_DIR=static/furifont

cp -R "$DIR/files/." .
patch -p1 --fuzz=3 --no-backup-if-mismatch < "$DIR/furigana.patch"

mkdir -p "$FONT_DIR"
for f in FurifontSansVF.woff2 OFL.txt; do
    curl -fsSL -o "$FONT_DIR/$f" "https://github.com/antfu/furifont/releases/download/$FURIFONT_VERSION/$f"
done
