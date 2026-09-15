#!/usr/bin/env python3
"""
Derive static font instances from the variable woff2 files the website uses.

Why this exists: Chrome rasterises a *variable* font into Type 3 glyph
procedures when printing to PDF. Type 3 is the one font type that some
applicant tracking systems fail to extract text from, which would make the
résumé unreadable to exactly the software that has to read it. Static TTFs
embed as CID TrueType instead, which every extractor handles.

Requires fonttools:  pip install fonttools brotli
Run from the repository root:  python3 resume/fonts/build.py
"""

from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent

# (source variable font, output family name, weights to instance)
JOBS = [
    (ROOT / "public/fonts/inter-latin.woff2", "Inter", [400, 600, 680]),
    (ROOT / "public/fonts/jetbrains-mono-latin.woff2", "JetBrainsMono", [400]),
]


def main() -> None:
    for src, name, weights in JOBS:
        if not src.exists():
            raise SystemExit(f"Missing source font: {src}")
        for weight in weights:
            font = TTFont(src)
            if "fvar" not in font:
                raise SystemExit(f"{src.name} is not a variable font")
            instancer.instantiateVariableFont(
                font, {"wght": weight}, inplace=True, updateFontNames=False
            )
            font.flavor = None  # plain TTF, not woff2
            dest = OUT / f"{name}-{weight}.ttf"
            font.save(dest)
            print(f"{dest.relative_to(ROOT)}  {dest.stat().st_size // 1024} kB")


if __name__ == "__main__":
    main()
