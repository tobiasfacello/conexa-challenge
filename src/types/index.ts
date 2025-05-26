//* Characters

export type CharacterSchema = {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
};

export type Characters = {
	info: {
		count: number;
		pages: number;
		next: string;
		prev: string;
	};
	results: CharacterSchema[];
};

export type SelectedCharacterType = Pick<CharacterSchema, 'id' | 'name'>;

//* Episodes

export type EpisodeSchema = {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	characters: string[];
	url: string;
	created: string;
};

export type Episodes = {
	info: {
		count: number;
		pages: number;
		next: string;
		prev: string;
	};
	results: EpisodeSchema[];
};

export type EpisodesUrlType = Pick<EpisodeSchema, 'url'>[];
