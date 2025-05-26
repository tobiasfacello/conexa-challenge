//! Next Core
import Image from "next/image";

//! Types
import { CharacterCardProps } from "../types"

//! Utils
import { getCharacterStatus, getCharacterSpecie } from "@/utils/character";

//! Components
import Card from "@/ui/card";
import Button from "@/ui/button";
import Text from "@/ui/text";

//! Styles
import styles from './styles.module.css';

export default function CharacterCard(props: CharacterCardProps) {
  const { id, image, name, status, species, episode, selectedCharacter, setCharacter, setEpisodes } = props;

  //! Validations
  const selectedCharacterValidation = selectedCharacter && id == selectedCharacter.id;

  const characterStatus = `${getCharacterStatus(status)} ${status}`;
  const characterSpecie = `${getCharacterSpecie(species)} ${species}`;

  //* Handlers
  const handleSelectedCharacter = () => {
    setCharacter({ id, name });
    setEpisodes(episode.map(url => ({ url })));
  }

  return (
    <Card variant="character">
      <div className={styles.card__content}>
        <div className={styles.card__content__media}>
          <Image
            className={styles.card__content__media__image}
            src={image}
            alt={`${name} Character Image`}
            fill
            priority
            quality={100}
            sizes="(100%)"
          />
        </div>
        <div className={styles.card__content__info}>
          <Text variant="paragraph">
            <b className={styles.card__content__info_name}>{name}</b>
          </Text>
          <Text variant="details">
            <b>Status:</b> {characterStatus}
          </Text>
          <Text variant="details">
            <b>Specie:</b> {characterSpecie}
          </Text>
          <Button children={selectedCharacterValidation ? "Character Selected ✅" : "Select Character"} selected={selectedCharacterValidation} onClick={handleSelectedCharacter} />
        </div>
      </div>
    </Card>
  );
}