export const getCharacterStatus = (status: string) => {
	switch (status) {
		case 'Alive':
			return '🟢';
		case 'Dead':
			return '🔴';
		default:
			return '⚫';
	}
};

export const getCharacterSpecie = (specie: string) => {
	switch (specie) {
		case 'Human':
			return '👨‍💼';
		case 'Alien':
			return '👽';
		case 'Humanoid':
			return '🧝';
		case 'Robot':
			return '🤖';
		case 'Animal':
			return '🐾';
		case 'Mythological Creature':
			return '🦄';
		case 'Poopybutthole':
			return '💩';
		case 'Cronenberg':
			return '🧟';
		case 'Disease':
			return '🦠';
		case 'Planet':
			return '🪐';
		default:
			return '❓';
	}
};
