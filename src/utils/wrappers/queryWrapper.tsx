"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";

//custom query wrapper to keep main layout cleaner
const QueryWrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryWrapper;
