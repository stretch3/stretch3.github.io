#!/bin/sh
# webpack 4 (scratch-gui v3.6.18) が以下の新版で導入された class fields /
# optional chaining 構文を parse できず、numberbank 経由のビルドが失敗する。
# 該当パッケージを node_modules 配下で旧版に置き換える。
# npm install は使わない (依存ツリーが reconcile されて install.sh 群が
# 配置した node_modules が大量に prune されるため)。
# 詳細: https://github.com/stretch3/stretch3.github.io/actions/runs/26011613534
set -e

pin_pkg() {
    pkg_name="$1"
    pkg_ver="$2"
    target_dir="$3"
    tmp=$(mktemp -d)
    (cd "$tmp" && npm pack --silent "$pkg_name@$pkg_ver" > /dev/null && tar -xzf *.tgz)
    rm -rf "./node_modules/$target_dir"
    mkdir -p "./node_modules/$(dirname "$target_dir")"
    mv "$tmp/package" "./node_modules/$target_dir"
    rm -rf "$tmp"
    echo "Pinned $pkg_name to $pkg_ver"
}

pin_pkg "@peculiar/webcrypto"   "1.5.0"  "@peculiar/webcrypto"
pin_pkg "@peculiar/asn1-schema" "2.3.15" "@peculiar/asn1-schema"
pin_pkg "webcrypto-core"        "1.8.1"  "webcrypto-core"
