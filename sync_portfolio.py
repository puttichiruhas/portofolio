import os
import re
from pathlib import Path
from PIL import Image

ASSETS_DIR = Path("assets")
THUMBS_DIR = ASSETS_DIR / "thumbs"
JS_FILE = Path("js/main.js")
TARGET_WIDTH = 1000
JPEG_QUALITY = 85

SUBDIRS = {
    "photographs": ("photo", "Photographs"),
    "poster-designs": ("poster", "Poster Design"),
    "ui-ux": ("uiux", "UI/UX Design"),
    "photo-animation": ("photoanim", "Photo Animation"),
    "videography": ("video", "Videography")
}

def clean_title(name):
    title = Path(name).stem.replace('_', ' ').replace('-', ' ').title()
    return title

portfolio_entries = []
valid_thumbs = set()

# Process assets
for subdir, (cat, label) in SUBDIRS.items():
    src_dir = ASSETS_DIR / subdir
    dst_dir = THUMBS_DIR / subdir
    
    if not src_dir.exists(): continue
    dst_dir.mkdir(parents=True, exist_ok=True)
    
    for f in src_dir.iterdir():
        if not f.is_file(): continue
        ext = f.suffix.lower()
        if ext not in (".jpg", ".jpeg", ".png", ".mp4"): continue
        
        # Build JS entry
        rel_path = f"./assets/{subdir}/{f.name}"
        title = clean_title(f.name)
        entry = f"    {{ src: '{rel_path}', title: '{title}', category: '{cat}', label: '{label}' }},"
        portfolio_entries.append(entry)
        
        # Handle thumbnail
        if ext in (".jpg", ".jpeg", ".png"):
            out_name = f.stem + ".jpg"
            out_path = dst_dir / out_name
            valid_thumbs.add(out_path.absolute())
            
            if not out_path.exists():
                try:
                    img = Image.open(f).convert("RGB")
                    w, h = img.size
                    ratio = TARGET_WIDTH / w
                    new_h = int(h * ratio)
                    img = img.resize((TARGET_WIDTH, new_h), Image.LANCZOS)
                    img.save(out_path, "JPEG", quality=JPEG_QUALITY, optimize=True)
                    print(f"Generated thumb: {out_name}")
                except Exception as e:
                    print(f"Error processing {f.name}: {e}")

# Clean up orphaned thumbnails
if THUMBS_DIR.exists():
    for root, dirs, files in os.walk(THUMBS_DIR):
        for file in files:
            p = Path(root) / file
            if p.absolute() not in valid_thumbs:
                p.unlink()
                print(f"Deleted old thumb: {file}")

# Update main.js
if JS_FILE.exists():
    content = JS_FILE.read_text('utf-8')
    start_marker = "const portfolioData = ["
    end_marker = "];"
    
    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker, start_idx)
    
    if start_idx != -1 and end_idx != -1:
        new_array = "const portfolioData = [\n" + "\n".join(portfolio_entries) + "\n"
        new_content = content[:start_idx] + new_array + content[end_idx:]
        JS_FILE.write_text(new_content, 'utf-8')
        print(f"Updated {JS_FILE} with {len(portfolio_entries)} items.")
