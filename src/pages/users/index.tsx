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
import { useQuery } from "react-query";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

function UserList() {
  const isDrawerSideBar = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { data, isLoading, error } = useQuery(
    "users",
    async () => {
      const response = await fetch("http:localhost:3000/api/users");
      const data = await response.json();
      const users = data.users.map((user: User) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: new Date(user.createdAt).toLocaleDateString(),
        };
      });
      return users;
    },
    {
      staleTime: 1000 * 5,
    }
  );

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
        {isLoading ? (
          <Flex justify="center">
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex justify="center">
            <Text>Falha ao obter dados dos usuario</Text>
          </Flex>
        ) : (
          <>
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
                {data.map((user: User, index: number) => {
                  return (
                    <Tr key={index}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <ChakraLink color="purple.400">
                            <Text fontWeight="bold">{user.name}</Text>
                          </ChakraLink>
                          <Text fontSize="sm" color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isDrawerSideBar && <Td> {user.createdAt}</Td>}
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
                  );
                })}
              </Tbody>
            </Table>
            <Pagination />
          </>
        )}
      </Box>
    </Layault>
  );
}

export default UserList;
