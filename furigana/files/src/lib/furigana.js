/**
 * @file
 * Furigana for the "日本語（ふりがな付き）" language option: the Japanese (ja) translations are rendered with
 * Furifont (https://github.com/antfu/furifont), a font that draws the furigana by itself.
 */
import {useEffect, useState} from 'react';
import '../css/furigana.css';

// webpack 4 has no loader for woff2, so the font is copied from static/ as is (see install.sh)
const FURIFONT_URL = 'static/furifont/FurifontSansVF.woff2';
const FURIFONT_FAMILY = 'Furifont Sans VF';
const FURIGANA_CLASS = 'furigana';

// Only Japanese characters use Furifont; Latin letters and digits keep the default font.
// Same range as Furifont's own web helper.
const UNICODE_RANGE = 'U+2E80-2FDF,U+3000-30FF,U+3190-319F,U+31F0-31FF,U+3400-4DBF,U+4E00-9FFF,U+F900-FAFF,' +
    'U+FE00-FE0F,U+FF00-FFEF,U+20000-3FFFF,U+E0100-E01EF';

/**
 * Furifont reads each run of kanji without the text around it, so it misreads some block texts or leaves their
 * kanji bare. A variation selector after a kanji picks its reading: VS226 + n is the kanji's reading n + 1, in the
 * order of FurifontSansVF.ivs.json in the Furifont release, and VS225 keeps the kanji bare
 * (https://github.com/antfu/furifont/blob/main/docs/design.md#selectors). The browser shapes a kanji with a selector
 * on its own, so each kanji of a run needs its own selector.
 * @param {number} n The index of the reading.
 * @returns {string} the variation selector.
 */
const reading = n => String.fromCodePoint(0xE01E1 + n);
const NO_READING = String.fromCodePoint(0xE01E0);

// 漢[かん/0] picks reading 0 of 漢, and 漢[-] keeps it bare.
// Only kana are matched, so the [ARGUMENTS] of extension blocks stay.
const NOTATION = /\[(?:-|([ぁ-ゖ]+)\/(\d+))\]/g;
const withReadings = text => text.replace(NOTATION, (match, kana, n) => (kana ? reading(Number(n)) : NO_READING));
const withoutReadings = text => text.replace(NOTATION, '');

/**
 * Block texts of the Japanese (ja) locale with the readings of the にほんご (ja-Hira) texts, by message id.
 * Made by comparing Furifont's furigana with the ja-Hira texts of scratch-blocks and scratch-l10n.
 * PROCEDURE_DEFAULT_NAME is left out: it becomes the name of new custom blocks, which projects keep.
 */
const BLOCK_READINGS = {
    COLOUR_BRIGHTNESS_LABEL: '明[あか/5]るさ',
    CONTROL_FOREACH: '%2 の要素を %1 に入[い/1]れて繰り返す',
    CONTROL_INCRCOUNTER: 'カウンターに足[た/2]す',
    CONTROL_REPEAT: '%1 回[かい/0]繰[く/0]り返す',
    CONTROL_STOP_ALL: 'すべてを止[と/1]める',
    CONTROL_STOP_OTHER: 'スプライトの他のスクリプトを止[と/1]める',
    CONTROL_STOP_THIS: 'このスクリプトを止[と/1]める',
    CONTROL_WAIT: '%1 秒[びょう/0]待[ま/1]つ',
    CONTROL_WHILE: '%1 の間[あいだ/3]繰[く/0]り返す',
    DATA_INDEX_RANDOM: '乱[らん/0]数[すう/0]',
    DATA_ITEMNUMOFLIST: '%2中[なか/1]の%1の場所',
    EVENT_WHENKEYPRESSED_LEFT: '左[ひだり/0]向[む/1]き矢印',
    EVENT_WHENKEYPRESSED_RIGHT: '右[みぎ/0]向[む/1]き矢印',
    EVENT_WHENTOUCHINGOBJECT: 'このスプライトが %1 に触[ふ/0]れたとき',
    LOOKS_EFFECT_BRIGHTNESS: '明[あか/5]るさ',
    LOOKS_EFFECT_FISHEYE: '魚[ぎょ/1]眼[がん/0]レンズ',
    LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: '奥に下[さ/4]げる',
    LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: '手前に出[だ/3]す',
    LOOKS_GOTOFRONTBACK_BACK: '最[さい/0]背[はい/1]面[めん/0]',
    LOOKS_GOTOFRONTBACK_FRONT: '最[さい/0]前[ぜん/0]面[めん/0]',
    LOOKS_SAYFORSECS: '%1 と %2 秒[びょう/0]言[い/2]う',
    // びょう and かんが would overlap, so 秒 stays bare
    LOOKS_THINKFORSECS: '%1 と %2 秒[-]考[かんが/1]える',
    MOTION_ALIGNSCENE_BOTTOMLEFT: '左[ひだり/0]下[した/2]',
    MOTION_IFONEDGEBOUNCE: 'もし端に着[つ/2]いたら、跳[は/2]ね返る',
    // 歩 reads ほ or ぽ by the number of steps (see setStepsReadings)
    MOTION_MOVESTEPS: '%1 歩[-]動[うご/1]かす',
    MOTION_SCROLLUP: '上[うえ/2]に %1 スクロールする',
    MOTION_TURNLEFT: '%1 %2 度[ど/0]回[まわ/1]す',
    MOTION_TURNRIGHT: '%1 %2 度[ど/0]回[まわ/1]す',
    MOTION_XSCROLL: 'x方向のスクロール量[りょう/0]',
    NEW_BROADCAST_MESSAGE_TITLE: '新しいメッセージ名[めい/0]:',
    NEW_LIST_TITLE: '新しいリスト名[めい/0]:',
    NEW_VARIABLE_TITLE: '新しい変[へん/0]数[すう/0]名[めい/0]:',
    OPERATORS_MATHOP_ABS: '絶[ぜっ/2]対[たい/0]値[ち/2]',
    OPERATORS_MATHOP_CEILING: '切り上[あ/1]げ',
    OPERATORS_MATHOP_FLOOR: '切り下[さ/4]げ',
    OPERATORS_MATHOP_SQRT: '平[へい/0]方[ほう/0]根[こん/1]',
    OPERATORS_MOD: '%1 を %2 で割[わ/1]った余り',
    OPERATORS_RANDOM: '%1 から %2 までの乱[らん/0]数[すう/0]',
    REDO: 'やり直[なお/1]し',
    RENAME_LIST: 'リスト名[めい/0]を変更',
    RENAME_LIST_MODAL_TITLE: 'リスト名[めい/0]を変更',
    RENAME_VARIABLE: '変[へん/0]数[すう/0]名[めい/0]を変更',
    RENAME_VARIABLE_MODAL_TITLE: '変[へん/0]数[すう/0]名[めい/0]を変更',
    SENSING_ASK_TEXT: 'あなたの名前は何[なん/0]ですか?',
    SENSING_COLORISTOUCHINGCOLOR: '%1 色が %2 色に触[ふ/0]れた',
    SENSING_CURRENT_DATE: '日[ひ/3]',
    SENSING_CURRENT_HOUR: '時[じ/0]',
    SENSING_CURRENT_MINUTE: '分[ふん/3]',
    SENSING_CURRENT_MONTH: '月[つき/3]',
    SENSING_CURRENT_YEAR: '年[とし/1]',
    SENSING_DAYSSINCE2000: '2000年[ねん/0]からの日数',
    SENSING_OF_COSTUMENAME: 'コスチューム名[めい/0]',
    SENSING_TOUCHINGCOLOR: '%1 色に触[ふ/0]れた',
    SENSING_TOUCHINGOBJECT: '%1 に触[ふ/0]れた',
    SENSING_USERNAME: 'ユーザー名[めい/0]',
    SOUND_STOPALLSOUNDS: 'すべての音を止[と/1]める',
    UNDO: '取り消[け/1]し'
};

/** The same for the texts of the extension blocks, which scratch-vm gets from the editor messages. */
const EXTENSION_READINGS = {
    'boost.motorDirection.reverse': '逆[ぎゃく/0]向[む/1]き',
    'boost.motorOnFor': 'モーター[MOTOR_ID]を[DURATION]秒[びょう/0]間[かん/0]オンにする',
    'boost.tiltDirection.down': '下[した/2]',
    'boost.tiltDirection.up': '上[うえ/2]',
    'ev3.beepNote': '[NOTE]の音符を[TIME]秒[びょう/0]鳴[な/0]らす',
    'ev3.getBrightness': '明[あか/5]るさ',
    'ev3.motorTurnClockwise': 'モーター[PORT]をこちら向きに[TIME]秒[びょう/0]間[かん/0]回[まわ/1]す',
    'ev3.motorTurnCounterClockwise': 'モーター[PORT]をあちら向きに[TIME]秒[びょう/0]間[かん/0]回[まわ/1]す',
    'ev3.whenBrightnessLessThan': '明[あか/5]るさ < [DISTANCE]のとき',
    'gdxfor.isFreeFalling': '落[らっ/2]下[か/0]中[ちゅう/0]',
    'gdxfor.tiltDirectionMenu.back': '後[うし/3]ろ',
    'gdxfor.turnedFaceDown': '表面が下[した/2]',
    'gdxfor.turnedFaceUp': '表面が上[うえ/2]',
    'makeymakey.downArrowShort': '下[した/2]',
    'makeymakey.leftArrow': '左[ひだり/0]向[む/1]き矢印',
    'makeymakey.rightArrow': '右[みぎ/0]向[む/1]き矢印',
    'makeymakey.upArrowShort': '上[うえ/2]',
    'microbit.clearDisplay': '画面を消[け/1]す',
    'microbit.pinStateMenu.on': '入[いり/3]',
    'microbit.tiltDirectionMenu.back': '後[うし/3]ろ',
    'music.midiPlayDrumForBeats': '[DRUM]のドラムを[BEATS]拍[はく/0]鳴[な/0]らす',
    'music.playDrumForBeats': '[DRUM]のドラムを[BEATS]拍[はく/0]鳴[な/0]らす',
    'music.playNoteForBeats': '[NOTE]の音符を[BEATS]拍[はく/0]鳴[な/0]らす',
    'music.restForBeats': '[BEATS]拍[はく/0]休[やす/1]む',
    'pen.clear': '全[ぜん/0]部[ぶ/0]消[け/1]す',
    'pen.colorMenu.brightness': '明[あか/5]るさ',
    'pen.colorMenu.transparency': '透[とう/0]明[めい/0]度[ど/0]',
    'pen.penDown': 'ペンを下[お/7]ろす',
    'pen.penUp': 'ペンを上[あ/1]げる',
    'text2speech.setVoiceBlock': '声[こえ/2]を[VOICE]にする',
    'videoSensing.on': '入[いり/3]',
    'videoSensing.setVideoTransparency': 'ビデオの透[とう/0]明[めい/0]度[ど/0]を[TRANSPARENCY]にする',
    'wedo2.motorDirection.reverse': '逆[ぎゃく/0]向[む/1]き',
    'wedo2.motorOnFor': '[MOTOR_ID]を[DURATION]秒[びょう/0]間[かん/0]オンにする',
    'wedo2.playNoteFor': '[NOTE]の音符を[DURATION]秒[びょう/0]間[かん/0]鳴[な/0]らす',
    'wedo2.tiltDirection.down': '下[した/2]',
    'wedo2.tiltDirection.up': '上[うえ/2]'
};

// format-message turns the messages it has used into objects
const messageText = message => (typeof message === 'string' ? message : message && message.message);

/**
 * Put the readings into the messages while furigana are shown, and restore them otherwise.
 * A message whose translation is no longer the one the readings were made for is left alone.
 * @param {object} messages The messages, by id.
 * @param {object} readings The texts with readings, by id.
 * @param {object} originals The original texts, by id, kept here.
 * @param {boolean} enabled Whether furigana are shown.
 */
const applyReadings = (messages, readings, originals, enabled) => {
    Object.keys(readings).forEach(id => {
        if (!Object.prototype.hasOwnProperty.call(originals, id)) {
            originals[id] = messageText(messages[id]);
        }
        const original = originals[id];
        if (original !== withoutReadings(readings[id])) return;
        const text = enabled ? withReadings(readings[id]) : original;
        if (messageText(messages[id]) !== text) messages[id] = text;
    });
};

const originalBlockMessages = {};
const originalExtensionMessages = {};
let extensionMessages = null;

/**
 * 歩 reads ぽ after 1, 3, 6, 8 and a number ending in 0 (いっぽ, さんぽ, じゅっぽ, ひゃっぽ, せんぽ) and ほ
 * otherwise (にほ, よんほ). A decimal reads by its last digit, and zero is ゼロほ.
 * @param {string} value The number of steps.
 * @returns {?number} the reading of 歩 (ほ is 1, ぽ is 2), or null if it is not a number.
 */
const stepsReading = value => {
    const digits = String(value).trim()
        .replace(/^-/, '');
    if (!/^\d+(\.\d+)?$/.test(digits)) return null;
    if (/^0+$/.test(digits)) return 1;
    if (!digits.includes('.') && digits.endsWith('0')) return 2;
    return '1368'.includes(digits[digits.length - 1]) ? 2 : 1;
};

let stepsReadingsEnabled = false;

/**
 * Pick the reading of 歩 in a "move steps" block by the number in it. 歩 reads ほ when the input is empty, holds
 * a reporter, or anything but a number.
 * @param {object} block The block.
 */
const updateStepsReading = block => {
    const target = block.getInputTargetBlock('STEPS');
    const n = target && target.isShadow() ? stepsReading(target.getFieldValue('NUM')) : null;
    const selector = reading(n === null ? 1 : n);
    block.inputList.forEach(input => input.fieldRow.forEach(field => {
        const text = field.getText();
        const newText = text.replace(/歩[\u{E01E0}-\u{E01EF}]?/u, `歩${selector}`);
        if (newText !== text) {
            // Set the text without setText, which would render the block again
            field.text_ = newText;
            field.size_.width = 0;
        }
    }));
};

/**
 * Update the reading of 歩 whenever a "move steps" block is rendered: after its number changes, when a reporter
 * is put into it or taken out, and when it is loaded.
 * @param {object} ScratchBlocks The scratch-blocks instance.
 * @param {boolean} enabled Whether furigana are shown.
 */
const setStepsReadings = (ScratchBlocks, enabled) => {
    stepsReadingsEnabled = enabled;
    const proto = ScratchBlocks.BlockSvg.prototype;
    if (proto.renderWithoutStepsReading) return;
    proto.renderWithoutStepsReading = proto.render;
    proto.render = function (...args) {
        if (stepsReadingsEnabled && this.type === 'motion_movesteps') updateStepsReading(this);
        return this.renderWithoutStepsReading(...args);
    };
};

/**
 * Pick the readings of the block texts while furigana are shown, and restore them otherwise.
 * Call it before ScratchBlocks.ScratchMsgs.setLocale and vm.setLocale.
 * @param {object} ScratchBlocks The scratch-blocks instance.
 * @param {object} messages The editor messages of the locale, which scratch-vm uses for the extension blocks.
 * @param {boolean} enabled Whether furigana are shown.
 */
const setBlockReadings = (ScratchBlocks, messages, enabled) => {
    const blockMessages = ScratchBlocks.ScratchMsgs.locales.ja;
    if (blockMessages) applyReadings(blockMessages, BLOCK_READINGS, originalBlockMessages, enabled);
    // Furigana are shown in Japanese only, so the messages of the last time they were shown are the ones to restore
    if (enabled) extensionMessages = messages;
    if (extensionMessages) {
        applyReadings(extensionMessages, EXTENSION_READINGS, originalExtensionMessages, enabled);
    }
    setStepsReadings(ScratchBlocks, enabled);
};

let furifontPromise = null;

/**
 * Add Furifont to the document's fonts. It is fetched only once.
 * @returns {Promise<boolean>} resolves to true once the font is ready to use.
 */
const loadFurifont = () => {
    if (!furifontPromise) {
        if (typeof FontFace === 'undefined' || !document.fonts) {
            furifontPromise = Promise.resolve(false);
        } else {
            const face = new FontFace(FURIFONT_FAMILY, `url(${FURIFONT_URL}) format("woff2")`, {
                unicodeRange: UNICODE_RANGE,
                weight: '100 900'
            });
            furifontPromise = face.load()
                .then(loaded => {
                    document.fonts.add(loaded);
                    return true;
                })
                .catch(() => {
                    furifontPromise = null;
                    return false;
                });
        }
    }
    return furifontPromise;
};

/**
 * Show furigana across the editor while enabled.
 * Furifont is loaded on first use, and the document gets the `furigana` class once it is ready.
 * @param {boolean} enabled Whether furigana are selected.
 * @returns {boolean} true once furigana are shown.
 */
const useFurigana = enabled => {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        if (!enabled) {
            setReady(false);
            return;
        }
        let cancelled = false;
        loadFurifont().then(loaded => {
            if (!cancelled) setReady(loaded);
        });
        return () => {
            cancelled = true;
        };
    }, [enabled]);
    const active = enabled && ready;
    useEffect(() => {
        document.documentElement.classList.toggle(FURIGANA_CLASS, active);
    }, [active]);
    return active;
};

export {
    loadFurifont,
    setBlockReadings,
    useFurigana
};
