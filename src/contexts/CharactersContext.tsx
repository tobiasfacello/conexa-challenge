"use client"

//! React Core
import { createContext, useContext } from "react";

//! Types
import { CharactersContextType } from "./types";

export const CharactersContext = createContext<CharactersContextType>({
  firstCharacter: null,
  secondCharacter: null,
  setFirstCharacter: () => { },
  setSecondCharacter: () => { },
});

export const useCharactersContext = () => useContext(CharactersContext);

