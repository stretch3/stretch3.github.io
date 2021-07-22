# Stretch3

*Read this in other languages: [English](README.en.md), [日本語](README.md)*

Stretch3 は https://stretch3.github.io/ より利用できます。

各拡張機能のライセンス、商用利用可能かどうかといった利用条件については、下記「利用できる独自拡張機能」のそれぞれのリンク先をご参照ください。

## 注意事項

TM2Scratch と TMPose2Scratch はライブラリの相性の関係で、両方を同時に使うことはいまのところできません。

## 利用できる独自拡張機能

- [ML2Scratch](https://github.com/champierre/ml2scratch) 機械学習を使った画像認識が簡単に体験、利用できます。
- [Posenet2Scratch](https://github.com/champierre/posenet2scratch) 人の姿勢を検出し、身体の各部分のxとyの位置を取得できます。
- [micro:bit More](https://lab.yengawa.com/project/scratch-microbit-more/) Scratchに付属するmicro:bit拡張よりも高機能で、micro:bitに備わっているセンサーや出力の機能をほぼすべて利用できます。
- [TM2Scratch](https://github.com/champierre/tm2scratch) Google Teachable Machine(https://teachablemachine.withgoogle.com/)で作成できる学習モデルを利用して、機械学習を使った画像認識、音声認識が利用できます。
- [TMPose2Scratch](https://github.com/champierre/tmpose2scratch) Google Teachable Machine(https://teachablemachine.withgoogle.com/)で作成できる学習モデルを利用して、機械学習を使った体のポーズの認識が利用できます。
- [Scratch2Maqueen](https://github.com/champierre/scratch2maqueen) グラフィカルプログラミングロボットMaqueenをScratchからリアルタイムにプログラムできます。
- [Facemesh2Scratch](https://github.com/champierre/facemesh2scratch) Webカメラだけで顔のトラッキングができます。
- [Handpose2Scratch](https://github.com/champierre/handpose2scratch) Webカメラだけで手と指のトラッキングができます。
- [PaSoRich](https://github.com/con3office/pasorich) ICカードリーダー「PaSoRi」(パソリ)を利用して、SuicaなどのICカードを読み取ることができます。
- [scratch3-qrcode](https://github.com/sugiura-lab/scratch3-qrcode) QRコードを読み取ります。QRコードは株式会社デンソーウェーブの登録商標です。
- [Speech2Scratch](https://github.com/champierre/speech2scratch) ブラウザの音声認識機能を利用して、音声をテキストに変換します。
- [ImageClassifier2Scratch](https://github.com/champierre/ic2scratch) Webカメラに映った物体を認識し、それが何であるかを判定します。
- [iftttWebhooks](https://github.com/NorifumiOgawa/iftttWebhooks) ScratchがIFTTTを経由して他のサービスと連携します。
- [NumberBank](https://github.com/con3office/numberbank) クラウドに数字を保存できる。

## How to add a custom extension.

- TBD

## Release Notes

- 2020/10/22 脆弱性対策のために、最新版のscratch-guiでビルドし直す。Ref. https://scratch.mit.edu/discuss/topic/12246/?page=40#post-4525760

### ML2Scratch

- 3.0.0 2020/03/28 Scratchのステージ画像を学習/判定できるようにした。
- 3.0.1 2020/03/29 デフォルトで、カメラの画像を学習/判定するようにする。ラベル名を自由に設定できるようにする。
- 3.0.2 2020/04/18 「ビデオを切にする」と「カメラの画像を学習/判定する」などのブロックを続けて使用した時、あとに続けたブロックが実行されないバグを修正しました。
- 3.0.3 2021/04/11 iPadに対応
- 3.0.4 2021/05/05 繁體中文版のブロックを追加(CAVEDU Education https://github.com/cavedunissin より提供)
- 3.0.5 2021/07/22 Show alert dialog on the upload window(https://github.com/champierre/ml2scratch/pull/35)

### PaSoRich

- 0.7.0 2020/10/10 コードの見直し整理
- 0.4.3 2020/03/20 Improve Connect function

### scratch3-qrcode
- v1.4 2020/05/18 Fix null character issue in binary data.
- v1.3 2020/05/15 Fix font-size of credit.
- v1.2 2020/05/14 Add UTF-16 decoder.
- v1.1 2020/05/13 Add error handling to TextDecoder.
- v1.0 2020/05/12 Initial version.

### TM2Scratch

- 2020/6/1 文言変更、閾値 -> しきい値

### TMPose2Scratch

- 2020/12/28 Initial release

### Handpose2Scratch

- 2020/6/6 "Handpose tfjs Error - No backend found in registry" を修正。
- 2020/6/7 Add description of each landmark.
- 2021/4/14 バナー画像とアイコン画像を更新。
- 2021/4/24 iOSに対応。
- 2021/05/09 ビデオの透明度を変更するブロックを追加。

### Facemesh2Scratch

- 2020/6/6 "No backend found in registry" を修正。
- 2021/4/14 バナー画像とアイコン画像を更新。
- 2021/05/09 ビデオの透明度を変更するブロックを追加。

### Microbit More

- 2020/6/6 Update repo of microbit-more.
- 2021/3/28 Update to Microbit More v2
- 2021/6/6 Update to Microbit More v2(0.2.1)

### Posenet2Scratch

- 2020/06/18 「ビデオを「切」にする」ブロックで、変数をプルダウンメニューの中に入れられないように変更。
- 2021/05/09 ビデオの透明度を変更するブロックを追加。

### ImageClassifier2Scratch

- 2020/06/20 文言変更、精度 -> 確信度。
- 2021/4/24 iOSに対応。
- 2021/05/09 ビデオの透明度を変更するブロックを追加。

### iftttWebhooks

- 2020/08/03 v1.0 Initial release

### numberbank
- 2020/10/10 Initial release
- 2021/03/06 0.7.6 にアップデート
- 2021/03/22 0.7.7 にアップデート
