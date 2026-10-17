#!/bin/sh
# micro:bit More (stretch3 ブランチ v0.3.2〜) のエントリは名前と説明を format-message の
# defaultMessage で書いているが、format-message が既定値として読むのは default キーで、
# stretch3 の GUI 側の format-message には翻訳も登録されないため、拡張機能ライブラリで
# 名前と説明が undefined になる。AkaDako などと同じく react-intl の FormattedMessage に書き換え、
# translationMap の翻訳 (scratch3-qrcode の extension-library.jsx が登録) で表示させる。
# microbitMore/install-stretch3.sh の後に scratch-gui の checkout のルートで実行する。
set -e

DIR=$(cd "$(dirname "$0")" && pwd)

patch -p1 --fuzz=3 --no-backup-if-mismatch < "$DIR/entry.patch"
