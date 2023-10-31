## サポートのお願い

Stretch3は2020年よりオープンソースかつ無料で提供しており、学校や各種プログラミング教室はじめさまざまな場所で利用されております。継続して開発を続けるためには、使っていただいている皆さまからの支援が必要です。<br />
[一杯のコーヒー](https://www.buymeacoffee.com/champierre)という形でサポートをいただけると大変ありがたく思います。

<a href="https://www.buymeacoffee.com/champierre"><img src="https://user-images.githubusercontent.com/10215/215533679-bb41b1a2-ba42-4eb6-9f9a-6d0bd67f3aaa.png"></a>

# Stretch3(ストレッチスリー)

Stretch3(ストレッチスリー)は自作の拡張機能を使えるように改造したScratch(スクラッチ)です。音声認識や、画像や音声を学習させることができる機械学習、ChatGPTとも接続できるなどいろいろな拡張機能があります。

Stretch3 は https://stretch3.github.io/ より利用できます。

各拡張機能のライセンス、商用利用可能かどうかといった利用条件については、下記「利用できる独自拡張機能」のそれぞれのリンク先をご参照ください。

*Read this in other languages: [English](README.en.md), [日本語](README.md)*

## 注意事項

TM2Scratch と TMPose2Scratch はライブラリの相性の関係で、両方を同時に使うことはいまのところできません。

## 利用できる独自拡張機能

- [ML2Scratch](https://github.com/champierre/ml2scratch) 機械学習を使った画像認識が簡単に体験、利用できます。
- [Posenet2Scratch](https://github.com/champierre/posenet2scratch) 人の姿勢を検出し、身体の各部分のxとyの位置を取得できます。
- [micro:bit More](https://lab.yengawa.com/project/scratch-microbit-more/) Scratchに付属するmicro:bit拡張よりも高機能で、micro:bitに備わっているセンサーや出力の機能をほぼすべて利用できます。
- [TM2Scratch](https://github.com/champierre/tm2scratch) [Google Teachable Machine](https://teachablemachine.withgoogle.com/)で作成できる学習モデルを利用して、機械学習を使った画像認識、音声認識が利用できます。
- [TMPose2Scratch](https://github.com/champierre/tmpose2scratch) [Google Teachable Machine](https://teachablemachine.withgoogle.com/)で作成できる学習モデルを利用して、機械学習を使った体のポーズの認識が利用できます。
- [AkaDako(Grove2Scratch)](https://github.com/tfabworks/xcx-g2s) USBケーブルを接続するだけでGroveのセンサー・アクチュエーターを制御できる[AkaDako（アカダコ）](https://akadako.com/)をScratchからプログラミングできます。
- [Scratch2Maqueen](https://github.com/champierre/scratch2maqueen) グラフィカルプログラミングロボットMaqueenをScratchからリアルタイムにプログラムできます。
- [Facemesh2Scratch](https://github.com/champierre/facemesh2scratch) Webカメラだけで顔のトラッキングができます。
- [Handpose2Scratch](https://github.com/champierre/handpose2scratch) Webカメラだけで手と指のトラッキングができます。
- [PaSoRich](https://github.com/con3office/pasorich) ICカードリーダー「PaSoRi」(パソリ)を利用して、SuicaなどのICカードを読み取ることができます。
- [scratch3-qrcode](https://github.com/sugiura-lab/scratch3-qrcode) QRコードを読み取ります。QRコードは株式会社デンソーウェーブの登録商標です。
- [Speech2Scratch(スピーチ トゥー スクラッチ)](https://github.com/champierre/speech2scratch) ブラウザの音声認識機能を利用して、音声をテキストに変換します。
- [ImageClassifier2Scratch](https://github.com/champierre/ic2scratch) Webカメラに映った物体を認識し、それが何であるかを判定します。
- [iftttWebhooks](https://github.com/NorifumiOgawa/iftttWebhooks) ScratchがIFTTTを経由して他のサービスと連携します。
- [NumberBank](https://github.com/con3office/numberbank) クラウドに数字を保存できる。
- [LEGO DUPLO Train](https://github.com/bricklife/scratch-lego-bluetooth-extensions) レゴ デュプロの機関車をScratchからコントロールすることができます。
- [Geo Scratch](https://github.com/geolonia/x-geo-scratch) 地図(Geolonia Maps)をScratchからコントロールすることができます。
- [ChatGPT2Scratch](https://github.com/ichiroc/chatgpt2scratch) ScratchからChatGPTを使うことができます。

## How to add a custom extension.

TBD

## Release Notes

- 2023/06/29 Scratchの色の変更を反映させるため、最新版のscratch-guiでビルドし直す。
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
- v1.5 2022/03/10 Improve English localization
- v1.4 2020/05/18 Fix null character issue in binary data.
- v1.3 2020/05/15 Fix font-size of credit.
- v1.2 2020/05/14 Add UTF-16 decoder.
- v1.1 2020/05/13 Add error handling to TextDecoder.
- v1.0 2020/05/12 Initial version.

### TM2Scratch

- 2020/06/01 文言変更、閾値 -> しきい値
- 2021/10/11 Localized for Korean.
- 2021/11/09 Localized for Traditional Chinese.
- 2021/11/16 Enable to localize extension description and sample model urls.
- 2021/12/07 Add Korean extension description.
- 2022/04/03 Teachable Machineの学習に使われる画像が正方形なので、これにあわせて判定に使うカメラ画像の両端を無視して、分類精度を向上させた。
- 2023/01/29 Teachable Machine側でラベルや学習内容を変更しても、TM2Scratch側に即座に反映されなかった問題を修正。
- 2023/02/14 音声モデルを正しくロードできなかったバグを修正。

### TMPose2Scratch

- 2020/12/28 Initial release
- 2021/11/16 Enable to localize extension description and sample model url.
- 2021/12/04 Localized for Korean.
- 2022/01/19 Fix [TMPose2Scratchの認識結果ラベルが受け取れない](https://github.com/champierre/tmpose2scratch/issues/2)
- 2022/08/04 Fix [tmPose is undefined when tmpose2scratch was loaded at first.](https://github.com/champierre/tmpose2scratch/issues/4)

### AkaDako(Grove2Scratch)

- 2022/01/31 Initial release
- 2022/02/02 拡張機能の説明がundefinedとなっていたのを修正。
- 2022/02/14 0.8.1を取り込み、拡張機能の説明がundefinedとなっているのを修正。
- 2022/02/25 0.9.0にアップデート。
- 2022/03/31 0.10.0にアップデート。
- 2022/12/06 0.11.0にアップデート。
- 2023/02/08 1.0.0にアップデート。
- 2023/02/24 1.0.1にアップデート。
- 2023/03/26 1.1.0にアップデート。
- 2023/04/27 1.1.2にアップデート。
- 2023/06/06 1.1.3にアップデート。

### Handpose2Scratch

- 2020/6/6 "Handpose tfjs Error - No backend found in registry" を修正。
- 2020/6/7 Add description of each landmark.
- 2021/4/14 バナー画像とアイコン画像を更新。
- 2021/4/24 iOSに対応。
- 2021/05/09 ビデオの透明度を変更するブロックを追加。
- 2021/08/29 z座標を取得できるブロックを追加。

### Facemesh2Scratch

- 2020/6/6 "No backend found in registry" を修正。
- 2021/4/14 バナー画像とアイコン画像を更新。
- 2021/05/09 ビデオの透明度を変更するブロックを追加。
- 2022/01/09 ビデオのオンオフを繰り返すと認識が不安定になるバグを修正。

### Microbit More

- 2020/6/6 Update repo of microbit-more.
- 2021/3/28 Update to Microbit More v2
- 2021/6/6 Update to Microbit More v2(0.2.1)

### Posenet2Scratch

- 2020/06/18 「ビデオを「切」にする」ブロックで、変数をプルダウンメニューの中に入れられないように変更。
- 2021/05/09 ビデオの透明度を変更するブロックを追加。
- 2021/11/16 Localized for Traditional Chinese.
- 2021/12/16 最高10人までのポーズを認識できるようにした。
- 2022/03/13 ビデオを切->入の操作を繰り返した場合に姿勢の検出ができなくなってしまうバグを修正。([sosu83](https://scratch.mit.edu/users/sosu83/)さんからのバグ報告で判明しました。)

### ImageClassifier2Scratch

- 2020/06/20 文言変更、精度 -> 確信度。
- 2021/4/24 iOSに対応。
- 2021/05/09 ビデオの透明度を変更するブロックを追加。

### iftttWebhooks

- 2020/08/03 v1.0 Initial release
- 2022/03/13 Multilingual support(en, zh-cn, th)

### numberbank
- 2020/10/10 Initial release
- 2021/03/06 0.7.6 にアップデート
- 2021/03/22 0.7.7 にアップデート
- 2021/09/02 0.8.1 にアップデート
- 2022/05/15 1.0 にアップデート

### Speech2Scratch
- 2020/12/15 Xcratch対応版を用意した。
- 2021/03/10 [Initialize Reporter Block at the start of recognition](https://github.com/champierre/speech2scratch/pull/5)

### LEGO DUPLO Train
- 2022/06/30 Initial release
- 2022/08/04 [Refine LEGO DUPLO Train extension](https://github.com/bricklife/scratch-lego-bluetooth-extensions/pull/11)

### Geo Scratch
- 2022/07/19 Initial release
- 2022/08/05 ステージの透明度を変更できるようにする。
- 2022/10/17 [全画面にしたときにスプライトが消えてしまうバグを修正](https://github.com/geolonia/x-geo-scratch/commit/f2bcb67f886a65cfbe0801e37796eaf351d09b60)
- 2022/10/20 [「地図を〜で表示」を2回目以降実行したときの処理を修正、地図を再描画する。](https://github.com/geolonia/x-geo-scratch/commit/a5287a19d93d137923485e56677568f72bc1d5b3)
- 2023/03/04 [全画面表示のときに透明度を変更しても、画面の一部にしか反映されていなかったバグを修正。](https://github.com/geolonia/x-geo-scratch/commit/a7997fba6d033e810bc04b6ced54673b131133ab)

### ChatGPT2Scratch
- 2023/03/05 Initial release
- 2023/03/23 v1.1 Add set-timeout block, set-temperature block, and storing API keys in Session Storage feature.
- 2023/04/22 v2.0 Added the feature to have contextual conversations, Added "Clear message logs". The release note are [here](https://github.com/ichiroc/chatgpt2scratch/releases/tag/v2.0).
- 2023/05/13 v2.1 Return error message, Change timeout to 30000. The release note are [here](https://github.com/ichiroc/chatgpt2scratch/releases/tag/v2.1).
