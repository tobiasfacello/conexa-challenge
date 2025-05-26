//! Types
import { EpisodeCardProps } from "../types"

//! UI
import Card from "@/ui/card";
import Text from "@/ui/text";

//! Styles
import styles from './styles.module.css';

export default function EpisodeCard(props: EpisodeCardProps) {
  const { id, name, air_date, characters } = props;
  return (
    <Card variant="episode">
      <div className={styles.card__content}>
        <div className={styles.card__content__info}>
          <Text variant="paragraph">Episode: {name}</Text>
          <Text variant="details">
            <b>Date:</b> {air_date}
          </Text>
          <Text variant="details">
            <b>Seen characters:</b>

          </Text>
        </div>
      </div>
    </Card>
  );
}