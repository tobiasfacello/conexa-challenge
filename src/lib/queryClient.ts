//! Tanstack Query
import { QueryClient } from '@tanstack/react-query';

//? Centralized Query Client configuration
export const createQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 5 * 60 * 1000,
				refetchOnWindowFocus: false,
			},
		},
	});
