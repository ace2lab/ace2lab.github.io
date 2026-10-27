#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = ["pillow"]
# ///
"""Generate deterministic ASCII-hashed WebP card thumbnails in assets/img/thumbs/.

Preserves original full-resolution images in assets/img/{publication_preview,gallery,research,awards}
untouched for lossless modal lightbox inspection, while emitting lightweight Retina-ready WebP
thumbnails keyed by SHA-1(NFC(rel_path))[:16] so macOS (NFD), Linux CI (NFC), and HTML srcset
parsers never encounter Korean encoding or whitespace/comma issues.
"""

from __future__ import annotations

import hashlib
import os
import unicodedata
from pathlib import Path
from PIL import Image, ImageOps

REPO_ROOT = Path(__file__).resolve().parents[1]
THUMBS_DIR = REPO_ROOT / "assets" / "img" / "thumbs"

# (directory relative to repo root, max pixel dimension, WebP quality)
TARGETS: list[tuple[str, int, int]] = [
    ("assets/img/publication_preview", 640, 82),
    ("assets/img/covers", 480, 84),
    ("assets/img/gallery", 640, 80),
    ("assets/img/research", 800, 84),
    ("assets/img/awards", 640, 82),
    ("assets/mario_falling_film_bg.jpg", 960, 82),
]

RASTER_EXTS = {".jpg", ".jpeg", ".png", ".webp"}


def canonical_rel_key(path: Path) -> str:
    rel = path.relative_to(REPO_ROOT).as_posix().lstrip("/")
    return unicodedata.normalize("NFC", rel)


def thumb_filename(rel_key: str) -> str:
    digest = hashlib.sha1(rel_key.encode("utf-8")).hexdigest()[:16]
    return f"{digest}.webp"


def process_image(src: Path, max_dim: int, quality: int) -> tuple[str, bool, int, int]:
    rel_key = canonical_rel_key(src)
    out_name = thumb_filename(rel_key)
    dst = THUMBS_DIR / out_name

    src_stat = src.stat()
    if dst.exists() and dst.stat().st_mtime >= src_stat.st_mtime and dst.stat().st_size > 0:
        return out_name, False, src_stat.st_size, dst.stat().st_size

    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode not in ("RGB", "RGBA"):
            has_alpha = "A" in im.getbands() or "transparency" in im.info
            im = im.convert("RGBA" if has_alpha else "RGB")
        w, h = im.size
        if max(w, h) > max_dim:
            im.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
        im.save(dst, format="WEBP", quality=quality, method=6)

    return out_name, True, src_stat.st_size, dst.stat().st_size


def main() -> None:
    THUMBS_DIR.mkdir(parents=True, exist_ok=True)
    expected_names: set[str] = set()
    built = 0
    reused = 0
    raw_bytes = 0
    thumb_bytes = 0

    for rel_target, max_dim, quality in TARGETS:
        target_path = REPO_ROOT / rel_target
        if not target_path.exists():
            continue
        files = [target_path] if target_path.is_file() else sorted(target_path.rglob("*"))
        for fp in files:
            if not fp.is_file() or fp.suffix.lower() not in RASTER_EXTS:
                continue
            out_name, created, s_sz, d_sz = process_image(fp, max_dim, quality)
            expected_names.add(out_name)
            raw_bytes += s_sz
            thumb_bytes += d_sz
            if created:
                built += 1
            else:
                reused += 1

    removed = 0
    for existing in THUMBS_DIR.glob("*.webp"):
        if existing.name not in expected_names:
            existing.unlink()
            removed += 1

    saved_pct = (1.0 - (thumb_bytes / raw_bytes)) * 100.0 if raw_bytes else 0.0
    print(
        f"[thumbs] total={len(expected_names)} (built={built}, reused={reused}, pruned={removed}) | "
        f"raw={raw_bytes / (1024 * 1024):.2f} MB -> thumbs={thumb_bytes / (1024 * 1024):.2f} MB "
        f"(-{saved_pct:.1f}%)"
    )


if __name__ == "__main__":
    main()
