import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import type { AppProps } from "next/app";

import { Root } from "../layouts";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Root>
        <Component {...pageProps} />
      </Root>
    </QueryClientProvider>
  );
};

export default MyApp;
