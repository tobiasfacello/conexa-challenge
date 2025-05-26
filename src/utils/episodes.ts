//! Types
import { EpisodesUrlType } from '@/types';

export const findSharedEpisodes = (
	firstCharacterEpisodes: EpisodesUrlType,
	secondCharacterEpisodes: EpisodesUrlType
) => {
	const shared: EpisodesUrlType = [];

	const firstCharacterEpisodesUrls = new Set(
		firstCharacterEpisodes.map((episode) => episode.url)
	);

	secondCharacterEpisodes.forEach((episode) => {
		if (firstCharacterEpisodesUrls.has(episode.url)) {
			shared.push({ url: episode.url });
		}
	});

	return shared;
};
