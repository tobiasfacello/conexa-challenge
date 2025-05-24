//! Next Core
import Image from "next/image";

//! Types
import { CharacterCardProps } from "./types"

//! Utils
import { getCharacterStatus, getCharacterSpecie } from "@/utils/character";

//! UI
import Card from "@/ui/card";
import Button from "@/ui/button";
import Text from "@/ui/text";

//! Styles
import styles from './styles.module.css';

export default function CharacterCard(props: CharacterCardProps) {
  const { image, name, status, specie } = props;

  const characterStatus = `${getCharacterStatus(status)} ${status}`;
  const characterSpecie = `${getCharacterSpecie(specie)} ${specie}`;

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
          />
        </div>
        <div className={styles.card__content__info}>
          <Text variant="paragraph">
            <b>{name}</b>
          </Text>
          <Text variant="details">
            <b>Status:</b> {characterStatus}
          </Text>
          <Text variant="details">
            <b>Specie:</b> {characterSpecie}
          </Text>
          <Button children={"Select Character"} />
        </div>
      </div>
    </Card>
  );
}