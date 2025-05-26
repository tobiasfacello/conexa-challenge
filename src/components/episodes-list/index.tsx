//! Types
import { EpisodeSchema } from "@/types";
import { EpisodesListProps } from "../types";

//! Hooks
import { useEpisodes } from "@/hooks/useEpisodes"

//! Components
import Text from "@/ui/text";
import EpisodeCard from "@/components/episode-card";

//! Styles
import styles from "./styles.module.css";

export default function EpisodesList(props: EpisodesListProps) {
  const { title, episodesList } = props;

  const { data: episodes } = useEpisodes(episodesList);

  if (episodesList.length === 0) {
    return (
      <div className={styles.episodes}>
        <div className={styles.episodes__heading}>
          <Text variant="details">{title}</Text>
        </div>
        <div className={styles.episodes__list}>
          <div className={styles.episodes__list_not_found}>
            <Text variant="subtitle">No episodes found ❌</Text>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className={styles.episodes}>
      <div className={styles.episodes__content}>
        <div className={styles.episodes__heading}>
          <Text variant="details">{title}</Text>
        </div>
        <div className={styles.episodes__list}>
          <div className={styles.episodes__list_scrollable}>
            {episodes && Array.isArray(episodes) && episodes.map((item: EpisodeSchema) => {
              return (<EpisodeCard
                key={item.id}
                id={item.id}
                name={item.name}
                air_date={item.air_date}
                characters={item.characters}
              />)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}