import { STATUS_EMOJIS, SPECIES_EMOJIS } from '../constants/character';

export const getCharacterStatus = (status: string) => {
	return STATUS_EMOJIS[status] || STATUS_EMOJIS.default;
};

export const getCharacterSpecie = (species: string) => {
	return SPECIES_EMOJIS[species] || SPECIES_EMOJIS.default;
};
