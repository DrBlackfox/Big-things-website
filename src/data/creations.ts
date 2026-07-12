// Content for the "Nos dernières créations" page.
//
// VIDEOS: hosted on Mux. Add a new entry by pasting the Playback ID
// from your Mux dashboard. Poster is generated automatically from Mux.
//   → https://dashboard.mux.com/  → Assets → copy "Playback ID"
//
// PHOTOS: use a Lovable asset URL (from a .asset.json .url field)
// or any absolute https URL.

export type CreationVideo = {
  playbackId: string;
  title: string;
  /** "16/9" (default), "9/16", "1/1", "4/5"… */
  aspectRatio?: string;
};

export type CreationPhoto = {
  src: string;
  alt: string;
};

export const creationVideos: CreationVideo[] = [
  { playbackId: "bSzIMkrK2HeNBebSpn9hJjmFNkv79UiweDY7EHkHyrE", title: "Big Things Decoration — projet récent", aspectRatio: "16/9" },
  // Add more videos here as you upload them to Mux.
];

export const creationPhotos: CreationPhoto[] = [
  // Example:
  // { src: "/__l5e/assets-v1/…/photo.webp", alt: "Enseigne lumineuse restaurant" },
];
