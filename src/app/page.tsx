"use client"

//! React Core
import { useEffect } from "react";

//! Context
import { useCharactersContext } from "@/contexts/CharactersContext";
import { useEpisodesContext } from "@/contexts/EpisodesContext";

//! Utils
import { findSharedEpisodes } from "@/utils/episodes";

//! Components
import CharactersList from "@/components/characters-list";
import EpisodesList from "@/components/episodes-list";

//! Styles
import styles from "./page.module.css";

export default function Home() {

  const { firstCharacter, secondCharacter, setFirstCharacter, setSecondCharacter } = useCharactersContext();

  const { firstCharacterEpisodes, secondCharacterEpisodes, sharedEpisodes, setFirstCharacterEpisodes, setSecondCharacterEpisodes, setSharedEpisodes } = useEpisodesContext();

  useEffect(() => {
    const shared = findSharedEpisodes(firstCharacterEpisodes, secondCharacterEpisodes);
    setSharedEpisodes(shared);
  }, [firstCharacterEpisodes, secondCharacterEpisodes]);


  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <div className={styles.container__characters}>
          <CharactersList title="Character #1" description="Select the first character" setCharacter={setFirstCharacter} selectedCharacter={firstCharacter} setEpisodes={setFirstCharacterEpisodes} />
          <CharactersList title="Character #2" description="Select the second character" setCharacter={setSecondCharacter} selectedCharacter={secondCharacter} setEpisodes={setSecondCharacterEpisodes} />
        </div>
        {(firstCharacter && secondCharacter) &&
          <div className={styles.container__episodes}>
            <EpisodesList title={`${firstCharacter.name} - Only Episodes`} episodesList={firstCharacterEpisodes} />
            <EpisodesList title={`${firstCharacter.name} & ${secondCharacter.name} - Shared Episodes`} episodesList={sharedEpisodes} />
            <EpisodesList title={`${secondCharacter.name} - Only Episodes`} episodesList={secondCharacterEpisodes} />
          </div>
        }
      </main>
    </div>
  );
}
