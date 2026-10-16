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
    useFurigana
};
