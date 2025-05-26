'use client';

//! React Core
import { ReactNode, useState } from 'react';

//! Tanstack Query
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//! Lib
import { createQueryClient } from '@/lib/queryClient';

export default function TanstackProvider({ children }: { children: ReactNode }) {

  //? Using useState to create a single instance of the Query Client (to prevent re-initializations on each render).
  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}