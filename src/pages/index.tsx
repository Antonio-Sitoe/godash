import Link from "next/link";
import { Input } from "@/components/Form/Input";
import { Button, Flex, FormErrorMessage } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";

const SignFormSchema = Yup.object({
  email: Yup.string().required("Email obrigatorio").email(),
  password: Yup.string().required("Password obrigatorio"),
});

function Home() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(SignFormSchema),
  });

  const handleSignIn: SubmitHandler<FieldValues> = async function (data) {
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
  };
  console.log(errors);
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justify="center">
      <Flex
        onSubmit={handleSubmit(handleSignIn)}
        w="100%"
        p={8}
        as="form"
        bg="gray.800"
        maxWidth={500}
        borderRadius={8}
        flexDirection="column"
        gap={6}
      >
        <Input
          label="Email"
          type="email"
          {...register("email", { required: "Email e obrigatorio" })}
        />
        {errors?.email?.message && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.email.message}
          </p>
        )}
        <Input label="Senha" type="password" {...register("Password")} />
        {errors?.password?.message && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.password.message}
          </p>
        )}
        <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
          <Link href="/dashboard">Enviar</Link>
        </Button>
      </Flex>
    </Flex>
  );
}

export default Home;
