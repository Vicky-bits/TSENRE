"use client";

import { gmailComposeUrl } from "@/lib/data";

/**
 * Click handler for email links. Most phones already have a native mail app
 * configured, so mailto: works great there — but a lot of desktops don't have
 * one set up, so mailto: silently does nothing. This opens the native app on
 * mobile (default anchor behavior, untouched) and opens Gmail's web compose
 * in a new tab on desktop instead.
 *
 * Usage: <a href={`mailto:${email}`} onClick={handleSmartEmailClick(email, subject)}>
 */
export function handleSmartEmailClick(email: string, subject?: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      // Let the default mailto: href handle it — native mail app opens.
      return;
    }
    e.preventDefault();
    window.open(gmailComposeUrl(email, subject), "_blank", "noopener,noreferrer");
  };
}
