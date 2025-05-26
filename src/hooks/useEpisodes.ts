//! React Core
import { useEffect } from 'react';

//! Types
import { EpisodesUrlType, EpisodeSchema } from '@/types';

//! Services
import { getEpisodes } from '@/services/api';

//! Tanstack Query
import { useQuery, useQueryClient } from '@tanstack/react-query';

export function useEpisodes(episodesList: EpisodesUrlType) {
	const queryClient = useQueryClient();

	const {
		data,
		isLoading: loading,
		error,
		refetch,
	} = useQuery<EpisodeSchema[], Error>({
		enabled: episodesList.length > 0,
		queryKey: ['episodes', episodesList],
		queryFn: () => getEpisodes(episodesList),
	});

	useEffect(() => {
		queryClient.invalidateQueries({ queryKey: ['episodes'] });
	}, [episodesList, queryClient]);

	return {
		data,
		loading,
		error: error as Error | null,
		refetch,
	};
}
