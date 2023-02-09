import Input from "@/components/Form/Input";
import Layault from "@/components/Layault/Layault";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

function CreateUser() {
  return (
    <Layault>
      <Box flex="1" borderRadius="8" bg="gray.800" p="8">
        <Heading size="lg" fontWeight="normal">
          Criar usuario
        </Heading>
        <Divider my="6" borderColor="gray.700" />

        <VStack spacing={8}>
          <SimpleGrid minChildWidth="240px" spacing={8} w="100%">
            <Input name="name" type="text" label="Nome Completo" />
            <Input name="email" type="email" label="E-mail" />
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing={8} w="100%">
            <Input name="password" type="password" label="Senha" />
            <Input
              name="password_confirmation"
              type="password"
              label="Confirmacao da senha"
            />
          </SimpleGrid>
        </VStack>
        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Link href="/users">
              <Button as="a" colorScheme="whiteAlpha">
                Cancelar
              </Button>
            </Link>
            <Button colorScheme="pink">Salvar</Button>
          </HStack>
        </Flex>
      </Box>
    </Layault>
  );
}

export default CreateUser;
