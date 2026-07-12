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
  // Example — replace with your real Mux Playback IDs:
  // { playbackId: "abc123XYZplaybackId", title: "Stand salon Marrakech 2026", aspectRatio: "16/9" },
];

export const creationPhotos: CreationPhoto[] = [
  // Example:
  // { src: "/__l5e/assets-v1/…/photo.webp", alt: "Enseigne lumineuse restaurant" },
];
