"use client";

//! React Core
import { useState, ReactNode } from "react";

//! Types
import { EpisodesUrlType } from "@/types";

//! Context
import { EpisodesContext } from "@/contexts/EpisodesContext";

export default function EpisodesProvider({ children }: { children: ReactNode }) {
  const [firstCharacterEpisodes, setFirstCharacterEpisodes] = useState<EpisodesUrlType | []>([]);
  const [secondCharacterEpisodes, setSecondCharacterEpisodes] = useState<EpisodesUrlType | []>([]);
  const [sharedEpisodes, setSharedEpisodes] = useState<EpisodesUrlType | []>([]);

  return (
    <EpisodesContext.Provider
      value={{
        firstCharacterEpisodes,
        secondCharacterEpisodes,
        sharedEpisodes,
        setFirstCharacterEpisodes,
        setSecondCharacterEpisodes,
        setSharedEpisodes,
      }}
    >
      {children}
    </EpisodesContext.Provider>
  );
}