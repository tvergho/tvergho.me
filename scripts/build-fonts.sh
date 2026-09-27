#!/usr/bin/env bash
# Rebuild public/fonts/ from the upstream EB Garamond sources.
#
# Why not @fontsource or Google Fonts: their builds are subsetted with the
# OpenType layout features stripped, including `smcp` / `c2sc` (small caps) and
# `onum` (oldstyle figures). The spec asks for both. Upstream ships them; we
# subset the upstream OTFs ourselves and keep the features we use.
#
# The resulting .woff2 files are committed, so a normal build never runs this.
# Re-run it only to pick up an upstream font revision.
#
# Requires: curl, and fonttools with brotli (`pip install fonttools brotli`).

set -euo pipefail
cd "$(dirname "$0")/.."

UPSTREAM="https://raw.githubusercontent.com/octaviopardo/EBGaramond12/master/fonts/otf"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# Same latin subset Google Fonts uses, so coverage is unchanged.
UNICODES="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,\
U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,\
U+FEFF,U+FFFD"

COMMON="kern,liga,rlig,locl,ccmp,mark,mkmk,onum,lnum,pnum,tnum,frac,numr,dnom"
ROMAN="$COMMON,smcp,c2sc"   # small caps: the AI / US acronyms
ITALIC="$COMMON"            # no acronyms are set in italic, so no small caps

subset () {  # <upstream-name> <output-name> <features>
  curl -sSLf -o "$TMP/$1.otf" "$UPSTREAM/$1.otf"
  pyftsubset "$TMP/$1.otf" \
    --output-file="public/fonts/$2.woff2" \
    --flavor=woff2 \
    --layout-features="$3" \
    --unicodes="$UNICODES" \
    --desubroutinize
  printf '  %-28s %s bytes\n' "$2.woff2" "$(wc -c < "public/fonts/$2.woff2" | tr -d ' ')"
}

echo "Subsetting EB Garamond (OFL-1.1) from $UPSTREAM"
subset EBGaramond-Regular eb-garamond-400        "$ROMAN"
subset EBGaramond-Medium  eb-garamond-500        "$ROMAN"
subset EBGaramond-Italic  eb-garamond-400-italic "$ITALIC"
