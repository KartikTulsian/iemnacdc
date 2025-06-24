"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SmoothScrollToHash() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        // Slight delay to ensure element is rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [id]);

  return null;
}
