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
  Link,
  useBreakpointValue,
  Tab,
} from "@chakra-ui/react";
import Layault from "@/components/Layault/Layault";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Pagination from "@/components/Pagination";

function UserList() {
  return (
    <Layault>
      <Box flex="1" borderRadius="8" bg="gray.800">
        <Flex mb="8" p="8" justify="space-between" align="center">
          <Heading fontWeight="normal" size="lg">
            Usuarios
          </Heading>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            leftIcon={<Icon as={RiAddLine} fontSize="18" />}
          >
            Criar novo usuario
          </Button>
        </Flex>
        <Table colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th px={["4", "4", "6"]} color="gray.300" width="8">
                <Checkbox colorScheme="pink" />
              </Th>
              <Th>Usuários</Th>
              <Th>Data de cadastro</Th>
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
                  <Link color="purple.400">
                    <Text fontWeight="bold">Antonio Sitoe</Text>
                  </Link>
                  <Text fontSize="sm" color="gray.300">
                    Antonio Sitoe
                  </Text>
                </Box>
              </Td>
              <Td>Outubro</Td>
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
