"use client"

//! React Core
import { useState } from "react";

//! Types
import { CharacterSchema } from "@/types";
import { CharactersListProps } from "../types";

//! Hooks
import { useCharacters } from "@/hooks/useCharacters"

//! Components
import Text from "@/ui/text";
import CharacterCard from "@/components/character-card";
import Pagination from "@/components/pagination";

//! Styles
import styles from "./styles.module.css";

export default function CharactersList(props: CharactersListProps) {
  const { title, description, selectedCharacter, setCharacter, setEpisodes } = props;

  const [pageNumber, setPageNumber] = useState(1);

  const { data: characters } = useCharacters(pageNumber);

  return (
    <div className={styles.characters}>
      <div className={styles.characters__heading}>
        <Text variant="subtitle">{title}</Text>
        <Text variant="details">{description}</Text>
      </div>
      <div className={styles.characters__list}>
        <div className={styles.characters__list_scrollable}>
          {characters && characters.results.map((item: CharacterSchema) => {
            return (
              <CharacterCard
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                status={item.status}
                species={item.species}
                episode={item.episode}
                selectedCharacter={selectedCharacter}
                setCharacter={setCharacter}
                setEpisodes={setEpisodes}
              />
            )
          })}
        </div>
      </div>
      <div className={styles.characters__pagination}>
        {
          characters &&
          <Pagination pageCount={characters.info.pages} onPageChange={({ selected }) => setPageNumber(selected + 1)} />
        }
      </div>
    </div>
  )
}