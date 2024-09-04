"use client";
import { useState } from "react";
import { useEffect } from "react";

 
export const useMediaQuery = (
  query,
  defaultMatches = window.matchMedia(query)
) => {
  const [matches, setMatches] = useState(defaultMatches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [query, matches]);

  return matches;
};
