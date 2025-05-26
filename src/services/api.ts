//! Types
import {
	EpisodesUrlType,
	CharacterSchema,
	Characters,
	EpisodeSchema,
} from '@/types';

//! Constants
import { API_BASE_URL } from '@/constants/api';

export async function getCharacterById(id: number): Promise<CharacterSchema> {
	try {
		const response = await fetch(`${API_BASE_URL}/character/${id}`);

		if (!response.ok) {
			throw new Error(`Failed to fetch character with ID ${id}`);
		}

		return await response.json();
	} catch (error) {
		console.error(`Error fetching character ${id}:`, error);
		throw error;
	}
}

export async function getCharacters(page: number): Promise<Characters> {
	try {
		const response = await fetch(`${API_BASE_URL}/character?page=${page}`);

		if (!response.ok) {
			throw new Error('Failed to fetch episodes');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching characters:', error);
		throw error;
	}
}

export async function getEpisodes(
	episodes: EpisodesUrlType
): Promise<EpisodeSchema[]> {
	try {
		const episodesPromises = episodes.map(async (episode) => {
			const response = await fetch(episode.url.toString());

			if (!response.ok) {
				throw new Error(`Failed to fetch episode at ${episode}`);
			}

			return response.json();
		});

		return await Promise.all(episodesPromises);
	} catch (error) {
		console.error(`Error fetching episodes`, error);
		throw error;
	}
}
