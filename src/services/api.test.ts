//! Constants
import { API_BASE_URL } from '@/constants/api';

//! Mocks
import {
	CharactersResult,
	// CharacterByIdResult,
	// EpisodesREsult,
} from '@/utils/mock';

//! Services
import { getCharacters, getCharacterById, getEpisodes } from '@/services/api';

beforeEach(() => {
	global.fetch = jest.fn();
});

afterEach(() => {
	jest.resetAllMocks();
});

// jest.mock('@/services/api', () => ({ getCharacters: jest.fn() }));

describe('API Services', () => {
	test('getCharacters debería retornar lista de personajes', async () => {
		(fetch as jest.Mock).mockResolvedValue({
			ok: true,
			json: async () => CharactersResult,
		});

		const data = await getCharacters(1);
		expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/character?page=${1}`);
		expect(data).toHaveProperty('results');
		expect(data).toHaveProperty('info');
		expect(data.results.length).toBeGreaterThan(10);
	});

	// test('getCharacterById debería manejar errores correctamente', async () => {
	// 	await expect(getCharacterById(-1)).rejects.toThrow();
	// });

	// test("geEpisodes")
});
