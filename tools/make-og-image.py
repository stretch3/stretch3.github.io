#!/usr/bin/env python3
"""Generate 1200x630 OG image for stretch3.github.io (Stretch3).

Portable Pillow-only generator. Uses the site's brand tokens (from
favicon + live site):
  - Scratch-style orange #F6A100 (Scratch block orange family)
  - deep orange   #E09010 accent
  - light gray bg #F0F0F0 (favicon dominant)
  - dark text     #333333
Japanese rendered with WenQuanYi Zen Hei (kanji + kana support).
"""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630
BG = (240, 240, 240)        # #F0F0F0 favicon gray
ORANGE = (246, 161, 0)      # #F6A100 Scratch orange
ORANGE_DEEP = (224, 144, 16)  # #E09010
TEXT = (51, 51, 51)         # #333333
MUTED = (110, 110, 110)
WHITE = (255, 255, 255)
GREEN = (127, 197, 68)      # Scratch green


def font(path, size):
    return ImageFont.truetype(path, size)


F_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
F_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
CJK = "/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc"

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# top orange band
d.rectangle([0, 0, W, 300], fill=ORANGE)
d.rectangle([0, 284, W, 300], fill=ORANGE_DEEP)

# Scratch-cat-like rounded logo block (rounded square)
cx, cy = 170, 150
d.rounded_rectangle([cx - 95, cy - 95, cx + 95, cy + 95], radius=28, fill=WHITE)
# cat-ish orange circle mark inside
d.ellipse([cx - 58, cy - 58, cx + 58, cy + 58], fill=ORANGE)
d.polygon([(cx - 92, cy - 40), (cx - 62, cy - 62), (cx - 62, cy - 18)], fill=WHITE)
d.polygon([(cx + 92, cy - 40), (cx + 62, cy - 62), (cx + 62, cy - 18)], fill=WHITE)
# eyes
d.ellipse([cx - 26, cy - 16, cx + 2, cy + 12], fill=TEXT)
d.ellipse([cx + 24, cy - 16, cx + 52, cy + 12], fill=TEXT)

# wordmark
f_brand = font(F_BOLD, 92)
d.text((300, cy - 44), "Stretch3", font=f_brand, fill=WHITE, anchor="lm")
f_cjk = font(CJK, 56)
d.text((302, cy + 58), "ストレッチスリー", font=f_cjk, fill=(255, 248, 235), anchor="lm")

# body title (CJK MUST use CJK font - DejaVu renders tofu)
f_h1 = font(CJK, 48)
d.text((600, 384), "Scratch 改造版 — 自作拡張機能を使える", font=f_h1, fill=TEXT, anchor="mm")

# feature chips (Scratch block style)
chips = ["ML2Scratch", "Posenet2Scratch", "micro:bit More", "ChatGPT"]
chip_w, chip_h = 236, 62
gap = 20
total = len(chips) * chip_w + (len(chips) - 1) * gap
x0 = 600 - total // 2
y0 = 428
f_chip = font(F_BOLD, 26)
for label in chips:
    d.rounded_rectangle([x0, y0, x0 + chip_w, y0 + chip_h], radius=18, fill=WHITE, outline=GREEN, width=4)
    d.text((x0 + chip_w // 2, y0 + chip_h // 2), label, font=f_chip, fill=(74, 134, 38), anchor="mm")
    x0 += chip_w + gap

# tagline
f_tag = font(F_REG, 28)
d.text((600, 530), "Scratch with custom extensions for learning & making", font=f_tag, fill=MUTED, anchor="mm")

# domain pill
pill_w, pill_h = 420, 54
px = 600 - pill_w // 2
py = 556
d.rounded_rectangle([px, py, px + pill_w, py + pill_h], radius=27, fill=WHITE, outline=ORANGE, width=3)
d.text((600, py + pill_h // 2), "stretch3.github.io", font=font(F_BOLD, 26), fill=TEXT, anchor="mm")

img.save("og-image.png")
print("saved og-image.png", img.size)