import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "store";
import { GlobalStyle } from "styles/globals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyle />
      </Provider>
    </QueryClientProvider>
  );
}
