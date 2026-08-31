import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds an Unsplash CDN url with consistent crop/format params.
 * Centralising this makes swapping in real photography a one-file change:
 * replace the `id` values in lib/data.ts and every size variant updates itself.
 *
 * A local asset (any id starting with "/", e.g. "/images/fahim-work-lake.jpg")
 * passes straight through, prefixed with the deployment's basePath — so
 * every call site can keep writing unsplash(img.id, w, h) without caring
 * whether a given photo is a real upload or an Unsplash placeholder.
 */
export function unsplash(id: string, width: number, height?: number) {
  if (id.startsWith("/")) return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${id}`;

  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    q: "80",
    w: String(width),
  });
  if (height) params.set("h", String(height));
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
}

const EXIF_CAMERAS = ["Leica M11", "Canon EOS R5", "Fujifilm X100V", "Sony A7 IV", "Nikon Z8"];
const EXIF_LENSES = ["35mm f/1.4", "50mm f/1.2", "85mm f/1.8", "24-70mm f/2.8", "23mm f/2"];
const EXIF_APERTURES = ["f/1.4", "f/1.8", "f/2", "f/2.8", "f/4", "f/5.6"];
const EXIF_SHUTTERS = ["1/125s", "1/250s", "1/500s", "1/1000s", "1/60s", "1/320s"];
const EXIF_ISOS = [100, 200, 320, 400, 640, 800, 1250];

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (Math.imul(hash, 31) + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/**
 * Deterministic, illustrative EXIF for a given image id — same photo
 * always shows the same "shot on" details rather than random noise on
 * every render. Swap for real metadata once actual photographs are in.
 */
export function getExif(id: string) {
  const h = hashString(id);
  return {
    camera: EXIF_CAMERAS[h % EXIF_CAMERAS.length],
    lens: EXIF_LENSES[Math.floor(h / 7) % EXIF_LENSES.length],
    aperture: EXIF_APERTURES[Math.floor(h / 13) % EXIF_APERTURES.length],
    shutter: EXIF_SHUTTERS[Math.floor(h / 29) % EXIF_SHUTTERS.length],
    iso: EXIF_ISOS[Math.floor(h / 53) % EXIF_ISOS.length],
  };
}
