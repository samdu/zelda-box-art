#!/usr/bin/env python3
"""
Scrape Zelda box art covers from zelda.fandom.com (stdlib only)
"""
import os
import time
import json
import re
import ssl
import urllib.request
import urllib.parse
from urllib.error import HTTPError, URLError

ssl._create_default_https_context = ssl._create_unverified_context

# Games list: (index, abbr, full_name, search_terms for box art)
# search_terms are patterns to look for in the wiki's image files
GAMES = [
    (1, "LoZ", "The Legend of Zelda", ["TLoZ_NA", "TLoZ_Box", "Legend_of_Zelda_NES"]),
    (2, "AoL", "Zelda II: Adventure of Link", ["TAoL_NA", "TAoL_Box", "Adventure_of_Link_NES"]),
    (3, "ALttP", "A Link to the Past", ["ALttP_NA", "ALttP_Box", "Link_to_the_Past_SNES"]),
    (4, "LA", "Link's Awakening", ["LADX_NA", "LA_Box", "Link%27s_Awakening_Box", "LANS_NA"]),
    (5, "OoT", "Ocarina of Time", ["OoT_NA", "OoT_Box", "Ocarina_of_Time_Box"]),
    (6, "MM", "Majora's Mask", ["MM_NA", "MM_Box", "Majora%27s_Mask_Box", "MM3D_NA"]),
    (7, "OoS", "Oracle of Seasons", ["OoS_NA", "OoS_Box", "Oracle_of_Seasons_Box"]),
    (8, "OoA", "Oracle of Ages", ["OoA_NA", "OoA_Box", "Oracle_of_Ages_Box"]),
    (9, "WW", "The Wind Waker", ["TWW_NA", "TWW_Box", "Wind_Waker_Box", "TWWHD_NA"]),
    (10, "FSA", "Four Swords Adventures", ["FSA_NA", "FSA_Box", "Four_Swords_Adventures_Box"]),
    (11, "MC", "The Minish Cap", ["TMC_NA", "TMC_Box", "Minish_Cap_Box"]),
    (12, "TP", "Twilight Princess", ["TP_NA", "TP_Box", "Twilight_Princess_Box", "TPHD_NA"]),
    (13, "PH", "Phantom Hourglass", ["PH_NA", "PH_Box", "Phantom_Hourglass_Box"]),
    (14, "ST", "Spirit Tracks", ["ST_NA", "ST_Box", "Spirit_Tracks_Box"]),
    (15, "SS", "Skyward Sword", ["SS_NA", "SS_Box", "Skyward_Sword_Box", "SSHD_NA"]),
    (16, "ALBW", "A Link Between Worlds", ["ALBW_NA", "ALBW_Box", "Link_Between_Worlds_Box"]),
    (17, "BotW", "Breath of the Wild", ["BotW_NA", "BotW_Box", "Breath_of_the_Wild_Box"]),
    (18, "TotK", "Tears of the Kingdom", ["TotK_NA", "TotK_Box", "Tears_of_the_Kingdom_Box"]),
    (19, "EoW", "Echoes of Wisdom", ["EoW_NA", "EoW_Box", "Echoes_of_Wisdom_Box"]),
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}


def get_existing_files(directory: str):
    """Return set of abbreviations that already have images in given directory"""
    existing = set()
    if not os.path.exists(directory):
        return existing
    for f in os.listdir(directory):
        if (f.endswith(".jpg") or f.endswith(".png")) and "-" in f:
            parts = f.split("-", 1)[1].rsplit(".", 1)[0]
            existing.add(parts)
    return existing


def fetch_url(url: str, timeout: int = 15) -> bytes | None:
    """Fetch URL content"""
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.read()
    except (HTTPError, URLError, TimeoutError) as e:
        print(f"  Fetch error: {e}")
        return None


def search_wiki_images(search_term: str) -> str | None:
    """Search for images on the wiki using the API"""
    params = urllib.parse.urlencode({
        "action": "query",
        "list": "allimages",
        "aifrom": search_term,
        "ailimit": "10",
        "aiprop": "url",
        "format": "json",
    })
    api_url = f"https://zelda.fandom.com/api.php?{params}"
    
    data = fetch_url(api_url)
    if not data:
        return None
    
    try:
        result = json.loads(data)
        images = result.get("query", {}).get("allimages", [])
        
        # Find the best match
        search_lower = search_term.lower().replace("%27", "'")
        for img in images:
            name = img.get("name", "").lower()
            if search_lower.replace("_", " ") in name.replace("_", " "):
                return img.get("url")
    except json.JSONDecodeError:
        pass
    
    return None


def get_file_url(filename: str) -> str | None:
    """Get the direct URL for a specific file on the wiki"""
    params = urllib.parse.urlencode({
        "action": "query",
        "titles": f"File:{filename}",
        "prop": "imageinfo",
        "iiprop": "url",
        "format": "json",
    })
    api_url = f"https://zelda.fandom.com/api.php?{params}"
    
    data = fetch_url(api_url)
    if not data:
        return None
    
    try:
        result = json.loads(data)
        pages = result.get("query", {}).get("pages", {})
        for page in pages.values():
            imageinfo = page.get("imageinfo", [])
            if imageinfo:
                return imageinfo[0].get("url")
    except (json.JSONDecodeError, KeyError, IndexError):
        pass
    
    return None


# Direct file mappings for known box art filenames
KNOWN_BOX_ART = {
    "LoZ": "TLoZ_NA_Box_Art.png",
    "AoL": "TAoL_NA_Box_Art.png",
    "ALttP": "ALttP_NA_Box_Art.png",
    "LA": "LADX_NA_Box_Art.png",
    "OoT": "OoT_NA_Box_Art.png",
    "MM": "MM_NA_Box_Art.png",
    "OoS": "OoS_NA_Box_Art.png",
    "OoA": "OoA_NA_Box_Art.png",
    "WW": "TWW_NA_Box_Art.png",
    "FSA": "FSA_NA_Box_Art.png",
    "MC": "TMC_NA_Box_Art.png",
    "TP": "TP_NA_Box_Art.png",
    "PH": "PH_NA_Box_Art.png",
    "ST": "ST_NA_Box_Art.png",
    "SS": "SS_NA_Box_Art.png",
    "ALBW": "ALBW_NA_Box_Art.png",
    "BotW": "BotW_NA_Box_Art.png",
    "TotK": "TotK_NA_Box_Art.png",
    "EoW": "EoW_NA_Box_Art.png",
}

# Fallback filenames if the standard naming doesn't work
FALLBACK_BOX_ART = {
    "LoZ": ["TLoZ_Box_Art.png", "Legend_of_Zelda_box.png"],
    "AoL": ["TAoL_Box_Art.png", "Adventure_of_Link_box.png"],
    "ALttP": ["ALttP_Box_Art.png", "Link_to_the_Past_box.png"],
    "LA": ["LA_Box_Art.png", "LANS_NA_Box_Art.png", "Links_Awakening_box.png"],
    "OoT": ["OoT_Box_Art.png", "OoT3D_NA_Box_Art.png"],
    "MM": ["MM_Box_Art.png", "MM3D_NA_Box_Art.png"],
    "OoS": ["OoS_Box_Art.png"],
    "OoA": ["OoA_Box_Art.png"],
    "WW": ["TWW_Box_Art.png", "TWWHD_NA_Box_Art.png"],
    "FSA": ["FSA_Box_Art.png"],
    "MC": ["TMC_Box_Art.png"],
    "TP": ["TP_Box_Art.png", "TPHD_NA_Box_Art.png"],
    "PH": ["PH_Box_Art.png"],
    "ST": ["ST_Box_Art.png"],
    "SS": ["SS_Box_Art.png", "SSHD_NA_Box_Art.png"],
    "ALBW": ["ALBW_Box_Art.png"],
    "BotW": ["BotW_Box_Art.png"],
    "TotK": ["TotK_Box_Art.png"],
    "EoW": ["EoW_Box_Art.png"],
}


def download_image(url: str, filepath: str) -> bool:
    """Download image from URL to filepath"""
    data = fetch_url(url, timeout=30)
    if not data:
        return False
    
    try:
        with open(filepath, 'wb') as f:
            f.write(data)
        return True
    except IOError as e:
        print(f"  Write error: {e}")
        return False


def main():
    output_dir = "box-art"
    os.makedirs(output_dir, exist_ok=True)
    
    existing = get_existing_files(output_dir)
    print(f"Found existing box art: {existing}\n")
    
    missing = [(idx, abbr, name, terms) for idx, abbr, name, terms in GAMES if abbr not in existing]
    
    if not missing:
        print("All box art already downloaded!")
        return
    
    print(f"Missing {len(missing)} box art images:\n")
    
    for idx, abbr, name, search_terms in missing:
        print(f"[{idx:02d}] {name} ({abbr})")
        
        img_url = None
        
        # Try the known filename first
        if abbr in KNOWN_BOX_ART:
            print(f"  Trying: {KNOWN_BOX_ART[abbr]}")
            img_url = get_file_url(KNOWN_BOX_ART[abbr])
        
        # Try fallbacks
        if not img_url and abbr in FALLBACK_BOX_ART:
            for fallback in FALLBACK_BOX_ART[abbr]:
                print(f"  Trying fallback: {fallback}")
                img_url = get_file_url(fallback)
                if img_url:
                    break
        
        # Try search as last resort
        if not img_url:
            for term in search_terms:
                print(f"  Searching: {term}")
                img_url = search_wiki_images(term)
                if img_url:
                    break
        
        if img_url:
            ext = ".png" if ".png" in img_url.lower() else ".jpg"
            filename = f"{output_dir}/{idx:02d}-{abbr}{ext}"
            
            print(f"  Found: {img_url[:70]}...")
            
            if download_image(img_url, filename):
                print(f"  ✓ Saved to {filename}")
            else:
                print(f"  ✗ Failed to download")
        else:
            print(f"  ✗ Could not find box art")
        
        time.sleep(0.5)
    
    print("\nDone!")
    
    new_existing = get_existing_files(output_dir)
    still_missing = [abbr for _, abbr, _, _ in GAMES if abbr not in new_existing]
    if still_missing:
        print(f"\nStill missing: {', '.join(still_missing)}")
    else:
        print("\nAll box art downloaded successfully!")


if __name__ == "__main__":
    main()
