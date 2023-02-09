import React from "react";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Tab,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import Layault from "@/components/Layault/Layault";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Pagination from "@/components/Pagination";

function UserList() {
  const isDrawerSideBar = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Layault>
      <Box flex="1" borderRadius="8" bg="gray.800">
        <Flex mb="8" p="8" justify="space-between" align="center">
          <Heading fontWeight="normal" size="lg">
            Usuarios
          </Heading>
          <Link href="/users/create">
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="18" />}
            >
              Criar novo usuario
            </Button>
          </Link>
        </Flex>
        <Table colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th px={["4", "4", "6"]} color="gray.300" width="8">
                <Checkbox colorScheme="pink" />
              </Th>
              <Th>Usuários</Th>
              {isDrawerSideBar && <Th>Data de cadastro</Th>}
              <Th width="8"></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td px={["4", "4", "6"]}>
                <Checkbox colorScheme="pink" />
              </Td>
              <Td>
                <Box>
                  <ChakraLink color="purple.400">
                    <Text fontWeight="bold">Antonio Sitoe</Text>
                  </ChakraLink>
                  <Text fontSize="sm" color="gray.300">
                    Antonio Sitoe
                  </Text>
                </Box>
              </Td>
              {isDrawerSideBar && <Td>Outubro</Td>}
              <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="purple"
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                >
                  Editar
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Pagination />
      </Box>
    </Layault>
  );
}

export default UserList;
