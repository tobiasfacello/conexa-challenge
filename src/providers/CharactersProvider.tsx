"use client";

//! React Core
import { useState, ReactNode } from "react";

//! Types
import { SelectedCharacterType } from "@/types";

//! Context
import { CharactersContext } from "@/contexts/CharactersContext";

export default function CharactersProvider({ children }: { children: ReactNode }) {
  const [firstCharacter, setFirstCharacter] = useState<SelectedCharacterType | null>(null);
  const [secondCharacter, setSecondCharacter] = useState<SelectedCharacterType | null>(null);

  return (
    <CharactersContext.Provider
      value={{
        firstCharacter,
        secondCharacter,
        setFirstCharacter,
        setSecondCharacter,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}