import type { NextConfig } from "next";

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true, // Register the PWA service worker
  workboxOptions: {
    disableDevLogs: true,
  },
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWA(nextConfig);
