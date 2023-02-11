import { Input } from "@/components/Form/Input";
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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const CreateUserFormSchema = Yup.object({
  name: Yup.string().required(""),
  email: Yup.string().required("").email(),
  password: Yup.string().required(""),
  password_confirmation: Yup.string()
    .required("")
    .oneOf([null, Yup.ref("password")], "As Senhas precisam ser iguais"),
});

function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<FieldValues> = async function (data) {
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };
  console.log(errors);
  return (
    <Layault>
      <Box
        flex="1"
        borderRadius="8"
        bg="gray.800"
        p="8"
        as="form"
        onSubmit={handleSubmit(handleCreateUser)}
      >
        <Heading size="lg" fontWeight="normal">
          Criar usuario
        </Heading>
        <Divider my="6" borderColor="gray.700" />

        <VStack spacing={8}>
          <SimpleGrid minChildWidth="240px" spacing={8} w="100%">
            <Input type="text" label="Nome Completo" {...register("name")} />
            <Input type="email" label="E-mail" {...register("email")} />
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing={8} w="100%">
            <Input type="password" label="Senha" {...register("password")} />
            <Input
              type="password"
              label="Confirmacao da senha"
              {...register("password_confirmation")}
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
