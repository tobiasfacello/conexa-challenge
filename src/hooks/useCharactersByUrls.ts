//! Types
import { getCharacterByUrl } from '@/services/api';
import { CharacterSchema } from '@/types';

//! Tanstack Query
import { useQueries } from '@tanstack/react-query';

export function useCharactersByUrls(
	characterUrls: string[],
	limit: number = 5
) {
	const limitedUrls = characterUrls.slice(0, limit);

	const queries = useQueries({
		queries: limitedUrls.map((url) => {
			return {
				queryKey: ['episodeCharacter', url],
				queryFn: async () => getCharacterByUrl(url),
			};
		}),
	});

	// Procesamos los resultados
	const loading = queries.some((query) => query.isLoading);
	const error = queries.some((query) => query.isError);
	const errors = queries
		.filter((query) => query.error)
		.map((query) => query.error);

	// Filtramos los datos para eliminar resultados nulos o indefinidos
	const characters = queries
		.map((query) => query.data)
		.filter((data): data is CharacterSchema => !!data);

	return {
		characters,
		loading,
		error,
		errors,
	};
}
