"""
Generate compressed thumbnails for all portfolio assets.
Outputs to assets/thumbs/ mirroring the original folder structure.
Target: 400px wide, JPEG quality 70 — keeps each thumb under ~30KB.
"""

import os
from pathlib import Path
from PIL import Image

ASSETS_DIR = Path("assets")
THUMBS_DIR = ASSETS_DIR / "thumbs"
TARGET_WIDTH = 400
JPEG_QUALITY = 70

# Subdirectories to process
SUBDIRS = ["photographs", "poster-designs", "ui-ux", "photo-animation"]

count = 0

for subdir in SUBDIRS:
    src_dir = ASSETS_DIR / subdir
    dst_dir = THUMBS_DIR / subdir

    if not src_dir.exists():
        print(f"  SKIP (not found): {src_dir}")
        continue

    dst_dir.mkdir(parents=True, exist_ok=True)

    for f in src_dir.iterdir():
        if not f.is_file():
            continue
        ext = f.suffix.lower()
        if ext not in (".jpg", ".jpeg", ".png"):
            print(f"  SKIP (format): {f.name}")
            continue

        out_name = f.stem + ".jpg"   # always save as jpg
        out_path = dst_dir / out_name

        try:
            img = Image.open(f)
            img = img.convert("RGB")

            # Resize proportionally
            w, h = img.size
            ratio = TARGET_WIDTH / w
            new_h = int(h * ratio)
            img = img.resize((TARGET_WIDTH, new_h), Image.LANCZOS)

            img.save(out_path, "JPEG", quality=JPEG_QUALITY, optimize=True)
            size_kb = out_path.stat().st_size / 1024
            count += 1
            print(f"  OK ({size_kb:.0f}KB): {out_path}")
        except Exception as e:
            print(f"  ERROR: {f.name} -> {e}")

print(f"\nDone! Generated {count} thumbnails in {THUMBS_DIR}")
