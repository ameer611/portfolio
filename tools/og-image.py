#!/usr/bin/env python3
"""Render public/og-image.png, the 1200x630 card shown when the site is shared.

Run manually after changing the name, role or tagline:

    python3 tools/og-image.py

Link unfurlers (LinkedIn, Telegram, WhatsApp, Slack) will not render SVG and
mostly ignore CSS, so the preview has to be a flat raster built ahead of time.
Fonts are pulled from Google Fonts and cached in tools/.fonts so the repo does
not carry binaries; the palette below tracks the dark theme in src/index.css.
"""

import pathlib
import urllib.request

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'og-image.png'
FONT_DIR = pathlib.Path(__file__).resolve().parent / '.fonts'

FONTS = {
    'display': 'https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksj.ttf',
    'sans': 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf',
}

# Dark theme tokens from src/index.css.
PAGE = (9, 9, 11)
CARD = (24, 24, 27)
INK = (250, 250, 250)
INK_MUTED = (168, 168, 168)
INK_FAINT = (141, 141, 141)
EDGE = (39, 39, 42)

W, H = 1200, 630
MARGIN = 96

NAME = 'MUHAMMAD USMONOV'
ROLE = 'AI ENGINEER'
LOCATION = 'Tashkent, Uzbekistan'
SITE = 'ameer.uz'
TAGLINE = 'Production LLM, RAG & agent systems'


def font(kind, size):
    FONT_DIR.mkdir(exist_ok=True)
    path = FONT_DIR / f'{kind}.ttf'
    if not path.exists():
        urllib.request.urlretrieve(FONTS[kind], path)
    return ImageFont.truetype(str(path), size)


def backdrop():
    """Page black, lifted toward the top left so the card is not a flat slab."""
    base = Image.new('RGB', (W, H), PAGE)
    glow = Image.new('L', (W, H), 0)
    draw = ImageDraw.Draw(glow)
    steps = 60
    for i in range(steps):
        r = int(1150 * (1 - i / steps))
        draw.ellipse((-460 - r // 3, -520 - r // 3, -460 + r, -520 + r), fill=int(52 * i / steps))
    # Without the blur the concentric steps leave a faint visible arc.
    glow = glow.filter(ImageFilter.GaussianBlur(90))
    return Image.composite(Image.new('RGB', (W, H), CARD), base, glow)


def tracked(draw, xy, text, fnt, fill, tracking):
    """PIL has no letter-spacing, so wide-set text is drawn a glyph at a time."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + tracking
    return x - tracking


def main():
    img = backdrop()
    draw = ImageDraw.Draw(img)

    # Logo plate, matching the .card treatment on the site: raised surface,
    # hairline edge, generous radius. The mark is far wider than it is tall, so
    # the plate is a badge rather than a square icon or the wave swims in it.
    plate_w, plate_h, plate_y = 180, 116, 104
    draw.rounded_rectangle(
        (MARGIN, plate_y, MARGIN + plate_w, plate_y + plate_h),
        radius=30, fill=CARD, outline=EDGE, width=1,
    )

    # The mark ships black on transparent, so it is recoloured, not inverted.
    mark = Image.open(ROOT / 'src' / 'assets' / 'logo.png').convert('RGBA')
    mark = mark.resize((108, round(108 * mark.height / mark.width)), Image.LANCZOS)
    white = Image.new('RGBA', mark.size, INK + (255,))
    white.putalpha(mark.getchannel('A'))
    img.paste(
        white,
        (MARGIN + (plate_w - white.width) // 2, plate_y + (plate_h - white.height) // 2),
        white,
    )

    draw.text((MARGIN, 258), NAME, font=font('display', 74), fill=INK)
    tracked(draw, (MARGIN + 3, 366), ROLE, font('sans', 25), INK_FAINT, 9)

    draw.line((MARGIN, 452, W - MARGIN, 452), fill=EDGE, width=1)

    sans_lg = font('sans', 23)
    draw.text((MARGIN, 486), LOCATION, font=sans_lg, fill=INK)
    draw.text((MARGIN, 528), SITE, font=sans_lg, fill=INK_FAINT)

    draw.text((W - MARGIN, 528), TAGLINE, font=sans_lg, fill=INK_MUTED, anchor='ra')

    OUT.parent.mkdir(exist_ok=True)
    img.save(OUT, optimize=True)
    print(f'wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} kB, {W}x{H})')


if __name__ == '__main__':
    main()
