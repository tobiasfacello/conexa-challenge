//! Types
import { EpisodeCharactersProps } from '../types'

//! Hooks
import { useCharactersByUrls } from '@/hooks/useCharactersByUrls'

//! Components
import Avatar from '@/ui/avatar'

//! Assets
import loader from "@/../public/loader.svg"

//! Styles
import styles from './styles.module.css'

export default function EpisodeCharacters(props: EpisodeCharactersProps) {
  const { characters } = props;

  const { characters: episodeCharacters, loading, error } = useCharactersByUrls(characters);

  return (
    <div className={styles.characters__avatars}>
      {
        episodeCharacters && episodeCharacters.map(
          (character) =>
            loading
              ? <Avatar key={character.id
              } src={loader} title="Loading..." />
              : <Avatar key={character.id} src={character.image} title={character.name} />
        )
      }
    </div>
  )
}