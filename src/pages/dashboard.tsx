import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import dynamic from "next/dynamic";
const ChartHome = dynamic(() => import("../components/Charts/ChartHome"), {
  ssr: false,
});

function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" mx="auto" px="6" maxWidth={1480}>
        <SideBar />
        <SimpleGrid
          minChildWidth="320px"
          alignItems="flex-start"
          flex="1"
          gap="4"
        >
          <Box bg="gray.800" borderRadius={8} p={["4", "8"]}>
            <Text>Inscritos da semana</Text>
            <ChartHome />
          </Box>
          <Box bg="gray.800" borderRadius={8} p={["4", "8"]}>
            <Text>Taxa de abertura</Text>
            <ChartHome />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
