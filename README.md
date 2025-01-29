## サポートのお願い

Stretch3は2020年よりオープンソースかつ無料で提供しており、学校や各種プログラミング教室はじめさまざまな場所で利用されております。継続して開発を続けるためには、使っていただいている皆さまからの支援が必要です。<br />
[一杯のコーヒー](https://www.buymeacoffee.com/champierre)という形でサポートをいただけると大変ありがたく思います。

<a href="https://www.buymeacoffee.com/champierre"><img src="https://user-images.githubusercontent.com/10215/215533679-bb41b1a2-ba42-4eb6-9f9a-6d0bd67f3aaa.png"></a>

# Stretch3(ストレッチスリー)

Stretch3(ストレッチスリー)は自作の拡張機能を使えるように改造したScratch(スクラッチ)です。音声認識(スピーチ トゥー スクラッチ)、ポーズの認識(ポーズネット トゥー スクラッチ)、画像や音声を学習させることができる機械学習(エムエル トゥー スクラッチ)、ChatGPT(チャットジーピーティー トゥー スクラッチ)などが使えるいろいろな拡張機能があります。

https://stretch3.github.io/ より利用できます。

各拡張機能のライセンス、商用利用可能かどうかといった利用条件については、下記「利用できる独自拡張機能」のそれぞれのリンク先をご参照ください。

*Read this in other languages: [English](README.en.md), [日本語](README.md)*

## 注意事項

TM2Scratch と TMPose2Scratch はライブラリの相性の関係で、両方を同時に使うことはいまのところできません。

## 利用できる独自拡張機能

- [ML2Scratch(エムエル トゥー スクラッチ)](https://github.com/champierre/ml2scratch) 機械学習を使った画像認識が簡単に体験、利用できます。
- [Posenet2Scratch(ポーズネット トゥー スクラッチ)](https://github.com/champierre/posenet2scratch) 人の姿勢を検出し、身体の各部分のxとyの位置を取得できます。
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
- [ChatGPT2Scratch(チャットジーピーティー トゥー スクラッチ)](https://github.com/ichiroc/chatgpt2scratch) ScratchからChatGPTを使うことができます。
- [Scratch2WebSerialAPI](https://github.com/champierre/scratch2webserialapi/) ScratchからWeb Serial APIを使ってシリアル通信をすることができます。
- [CameraSelector](https://github.com/tfabworks/xcx-cameraselector) Scratchから使用するカメラデバイスを切り替えられるようにする拡張です。
- [Screenshot](https://github.com/tfabworks/xcx-screenshot) ステージのスクリーンショットを撮ることができる拡張機能です。
- [Data Tool](https://github.com/tfabworks/xcx-webapi) 任意のWebAPIにアクセスし、返ってきたJSONデータをパースできる拡張機能です。

## How to add a custom extension.

TBD

## Release Notes

- 2023/06/29 Scratchの色の変更を反映させるため、最新版のscratch-guiでビルドし直す。
- 2020/10/22 脆弱性対策のために、最新版のscratch-guiでビルドし直す。Ref. https://scratch.mit.edu/discuss/topic/12246/?page=40#post-4525760

### ML2Scratch

- 2024/03/08 Xcratchからだと学習データのアップロードができない問題を修正しました。
- 2024/02/03 [カメラ切り替えブロックを追加](https://github.com/champierre/ml2scratch/pull/65)
- 2021/07/22 3.0.5 Show alert dialog on the upload window(https://github.com/champierre/ml2scratch/pull/35)
- 2021/05/05 3.0.4 繁體中文版のブロックを追加(CAVEDU Education https://github.com/cavedunissin より提供)
- 2021/04/11 3.0.3 iPadに対応
- 2020/04/18 3.0.2 「ビデオを切にする」と「カメラの画像を学習/判定する」などのブロックを続けて使用した時、あとに続けたブロックが実行されないバグを修正しました。
- 2020/03/29 3.0.1 デフォルトで、カメラの画像を学習/判定するようにする。ラベル名を自由に設定できるようにする。
- 2020/03/28 3.0.0 Scratchのステージ画像を学習/判定できるようにした。

### PaSoRich

- 2024/01/06 2.0 RC-S300に対応/ICカードリーダーの複数利用に対応/更新確認機能ブロックの追加/デバイスリセットブロックの追加
- 2020/10/10 0.7.0 コードの見直し整理
- 2020/03/20 0.4.3 Improve Connect function

### scratch3-qrcode

- 2022/03/10 v1.5 Improve English localization
- 2020/05/18 v1.4 Fix null character issue in binary data.
- 2020/05/15 v1.3 Fix font-size of credit.
- 2020/05/14 v1.2 Add UTF-16 decoder.
- 2020/05/13 v1.1 Add error handling to TextDecoder.
- 2020/05/12 v1.0 Initial version.

### TM2Scratch

- 2025/01/29 [Added german language](https://github.com/champierre/tm2scratch/pull/42)
- 2025/01/28 [Allow for other teachable machine URLs](https://github.com/champierre/tm2scratch/pull/44)
- 2024/06/18 Fix build error.
- 2024/02/03 [カメラ切り替えブロックを追加](https://github.com/champierre/tm2scratch/pull/41)
- 2023/02/14 音声モデルを正しくロードできなかったバグを修正。
- 2023/01/29 Teachable Machine側でラベルや学習内容を変更しても、TM2Scratch側に即座に反映されなかった問題を修正。
- 2022/04/03 Teachable Machineの学習に使われる画像が正方形なので、これにあわせて判定に使うカメラ画像の両端を無視して、分類精度を向上させた。
- 2021/12/07 Add Korean extension description.
- 2021/11/16 Enable to localize extension description and sample model urls.
- 2021/11/09 Localized for Traditional Chinese.
- 2021/10/11 Localized for Korean.
- 2020/06/01 文言変更、閾値 -> しきい値

### TMPose2Scratch

- 2024/06/18 Fix build error.
- 2022/08/04 Fix [tmPose is undefined when tmpose2scratch was loaded at first.](https://github.com/champierre/tmpose2scratch/issues/4)
- 2022/01/19 Fix [TMPose2Scratchの認識結果ラベルが受け取れない](https://github.com/champierre/tmpose2scratch/issues/2)
- 2021/12/04 Localized for Korean.
- 2021/11/16 Enable to localize extension description and sample model url.
- 2020/12/28 Initial release

### AkaDako(Grove2Scratch)

- 2024/09/27 v1.2.2 通信ブロックの文言を修正
- 2024/01/06 v1.2.0 距離センサーにノイズ除去処理を追加
- 2023/06/06 v1.1.3 通信グループIDの入力値チェックを追加
- 2023/04/27 v1.1.2 ブロックの文言修正
- 2023/03/26 1.1.0にアップデート。
- 2023/02/24 1.0.1にアップデート。
- 2023/02/08 1.0.0にアップデート。
- 2022/12/06 0.11.0にアップデート。
- 2022/03/31 0.10.0にアップデート。
- 2022/02/25 0.9.0にアップデート。
- 2022/02/14 0.8.1を取り込み、拡張機能の説明がundefinedとなっているのを修正。
- 2022/02/02 拡張機能の説明がundefinedとなっていたのを修正。
- 2022/01/31 Initial release

### Handpose2Scratch

- 2024/06/18 Fix runtime error: "landmark_menu is undefined"
- 2021/08/29 z座標を取得できるブロックを追加。
- 2021/05/09 ビデオの透明度を変更するブロックを追加。
- 2021/4/24 iOSに対応。
- 2021/4/14 バナー画像とアイコン画像を更新。
- 2020/6/7 Add description of each landmark.
- 2020/6/6 "Handpose tfjs Error - No backend found in registry" を修正。

### Facemesh2Scratch

- 2022/01/09 ビデオのオンオフを繰り返すと認識が不安定になるバグを修正。
- 2021/05/09 ビデオの透明度を変更するブロックを追加。
- 2021/4/14 バナー画像とアイコン画像を更新。
- 2020/6/6 "No backend found in registry" を修正。

### Microbit More

- 2021/6/6 Update to Microbit More v2(0.2.1)
- 2021/3/28 Update to Microbit More v2
- 2020/6/6 Update repo of microbit-more.

### Posenet2Scratch

- 2022/03/13 ビデオを切->入の操作を繰り返した場合に姿勢の検出ができなくなってしまうバグを修正。([sosu83](https://scratch.mit.edu/users/sosu83/)さんからのバグ報告で判明しました。)
- 2021/12/16 最高10人までのポーズを認識できるようにした。
- 2021/11/16 Localized for Traditional Chinese.
- 2021/05/09 ビデオの透明度を変更するブロックを追加。
- 2020/06/18 「ビデオを「切」にする」ブロックで、変数をプルダウンメニューの中に入れられないように変更。

### ImageClassifier2Scratch

- 2021/05/09 ビデオの透明度を変更するブロックを追加。
- 2021/04/24 iOSに対応。
- 2020/06/20 文言変更、精度 -> 確信度。

### iftttWebhooks

- 2022/03/13 Multilingual support(en, zh-cn, th)
- 2020/08/03 v1.0 Initial release

### numberbank

- 2024/06/19 Fix Build Error.
- 2023/12/18 2.0 にアップデート
- 2022/05/15 1.0 にアップデート
- 2021/09/02 0.8.1 にアップデート
- 2021/03/22 0.7.7 にアップデート
- 2021/03/06 0.7.6 にアップデート
- 2020/10/10 Initial release

### Speech2Scratch

- 2021/03/10 [Initialize Reporter Block at the start of recognition](https://github.com/champierre/speech2scratch/pull/5)
- 2020/12/15 Xcratch対応版を用意した。

### LEGO DUPLO Train

- 2022/08/04 [Refine LEGO DUPLO Train extension](https://github.com/bricklife/scratch-lego-bluetooth-extensions/pull/11)
- 2022/06/30 Initial release

### Geo Scratch

- 2023/03/04 [全画面表示のときに透明度を変更しても、画面の一部にしか反映されていなかったバグを修正。](https://github.com/geolonia/x-geo-scratch/commit/a7997fba6d033e810bc04b6ced54673b131133ab)
- 2022/10/20 [「地図を〜で表示」を2回目以降実行したときの処理を修正、地図を再描画する。](https://github.com/geolonia/x-geo-scratch/commit/a5287a19d93d137923485e56677568f72bc1d5b3)
- 2022/10/17 [全画面にしたときにスプライトが消えてしまうバグを修正](https://github.com/geolonia/x-geo-scratch/commit/f2bcb67f886a65cfbe0801e37796eaf351d09b60)
- 2022/08/05 ステージの透明度を変更できるようにする。
- 2022/07/19 Initial release

### ChatGPT2Scratch

- 2024/07/23 v2.3 change the model to gpt-4o-mini [here](https://github.com/ichiroc/chatgpt2scratch/releases/tag/v2.3)
- 2024/06/17 v2.2 add system prompt setting [here](https://github.com/ichiroc/chatgpt2scratch/releases/tag/v2.2)
- 2023/11/01 v2.1.2 fix fetchWithToken bug [here](https://github.com/ichiroc/chatgpt2scratch/releases/tag/v2.1.2)
- 2023/07/15 v2.1.1 add About API usage fees to README.
- 2023/05/13 v2.1 Return error message, Change timeout to 30000. The release note are [here](https://github.com/ichiroc/chatgpt2scratch/releases/tag/v2.1).
- 2023/04/22 v2.0 Added the feature to have contextual conversations, Added "Clear message logs". The release note are [here](https://github.com/ichiroc/chatgpt2scratch/releases/tag/v2.0).
- 2023/03/23 v1.1 Add set-timeout block, set-temperature block, and storing API keys in Session Storage feature.
- 2023/03/05 Initial release

### Scratch2WebSerialAPI
- 2024/02/03 Initial release
- 2024/03/09 アイコンを差し替え

### Camera Selector
- 2024/08/15 Initial release

### Screenshot
- 2024/08/15 Initial release

### Data Tool
- 2024/08/15 Initial release
