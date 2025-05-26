import { SelectedCharacterType, EpisodesUrlType } from '@/types';

export type CharactersContextType = {
	firstCharacter: SelectedCharacterType | null;
	secondCharacter: SelectedCharacterType | null;
	setFirstCharacter: (character: SelectedCharacterType) => void;
	setSecondCharacter: (character: SelectedCharacterType) => void;
};

export type EpisodesContextType = {
	firstCharacterEpisodes: EpisodesUrlType;
	secondCharacterEpisodes: EpisodesUrlType;
	sharedEpisodes: EpisodesUrlType;
	setFirstCharacterEpisodes: (episodes: EpisodesUrlType) => void;
	setSecondCharacterEpisodes: (episodes: EpisodesUrlType) => void;
	setSharedEpisodes: (episodes: EpisodesUrlType) => void;
};
