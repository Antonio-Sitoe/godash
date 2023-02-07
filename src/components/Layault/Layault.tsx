import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Header";
import SideBar from "../SideBar";

function Layault({ children }: { children: ReactNode }) {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" mx="auto" px="6" maxWidth={1480}>
        <SideBar />
        {children}
      </Flex>
    </Flex>
  );
}

export default Layault;
