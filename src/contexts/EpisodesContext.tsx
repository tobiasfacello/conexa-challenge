"use client"

//! React Core
import { createContext, useContext } from "react";

//! Types
import { EpisodesContextType } from "./types";

export const EpisodesContext = createContext<EpisodesContextType>({
  firstCharacterEpisodes: [],
  secondCharacterEpisodes: [],
  sharedEpisodes: [],
  setFirstCharacterEpisodes: () => { },
  setSecondCharacterEpisodes: () => { },
  setSharedEpisodes: () => { },
});

export const useEpisodesContext = () => useContext(EpisodesContext);

