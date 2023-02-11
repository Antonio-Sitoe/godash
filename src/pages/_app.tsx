import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarDrawerProvider } from "@/contexts/SideBarDrawerContext";
import { makeServer } from "@/services/mirage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const Client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={Client}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />;
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
