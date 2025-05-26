//! Types
import { Characters } from '@/types';

//! Services
import { getCharacters } from '@/services/api';

//! Tanstack Query
import { useQuery } from '@tanstack/react-query';

export function useCharacters(initialPage: number) {
	const {
		data,
		isLoading: loading,
		error,
		refetch,
	} = useQuery<Characters, Error>({
		queryKey: ['charactersPage', initialPage],
		queryFn: () => getCharacters(initialPage),
		placeholderData: (prevData) => prevData,
	});

	return {
		data,
		loading,
		error: error as Error | null,
		refetch,
	};
}
