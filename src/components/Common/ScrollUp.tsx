"use client";

import { useEffect } from "react";

export default function ScrollUp() {
  useEffect(() => {
    // Do not return the browser's scrollTo result as a React cleanup handler.
    window.document.scrollingElement?.scrollTo(0, 0);
  }, []);

  return null;
}
