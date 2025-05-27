//! Types
import {
	CharacterSchema,
	EpisodeSchema,
	SelectedCharacterType,
	EpisodesUrlType,
} from '@/types';

//* Characters List
export type CharactersListProps = {
	title: string;
	description: string;
	selectedCharacter: SelectedCharacterType | null;
	setCharacter: (character: SelectedCharacterType) => void;
	setEpisodes: (episodes: EpisodesUrlType) => void;
};

//* Character Card
export interface CharacterCardProps
	extends Pick<
		CharacterSchema,
		'id' | 'image' | 'name' | 'status' | 'species' | 'episode'
	> {
	selectedCharacter: SelectedCharacterType | null;
	setCharacter: (character: SelectedCharacterType) => void;
	setEpisodes: (episodes: EpisodesUrlType) => void;
}

//* Episodes List
export type EpisodesListProps = {
	title: string;
	episodesList: EpisodesUrlType;
};

//* Episode Card
export type EpisodeCardProps = Pick<
	EpisodeSchema,
	'name' | 'air_date' | 'characters'
>;

//* Episode Characters
export type EpisodeCharactersProps = {
	characters: string[];
};

//* Pagination
export type PaginationProps = {
	pageCount: number;
	onPageChange: (data: { selected: number }) => void;
};
