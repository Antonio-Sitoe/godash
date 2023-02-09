import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarDrawerProvider } from "@/contexts/SideBarDrawerContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />;
        </SidebarDrawerProvider>
      </ChakraProvider>
    </>
  );
}
