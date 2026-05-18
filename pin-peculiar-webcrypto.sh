#!/bin/sh
# webpack 4 (scratch-gui v3.6.18) が @peculiar/webcrypto 1.6.0+ の class fields
# 構文を parse できないため 1.5.0 に固定する。
# 詳細: https://github.com/stretch3/stretch3.github.io/actions/runs/25210997230
set -e
npm install --legacy-peer-deps --no-save @peculiar/webcrypto@1.5.0
