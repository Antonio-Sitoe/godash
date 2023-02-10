import Link from "next/link";
import { Input } from "@/components/Form/Input";
import { Button, Flex } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface IdataProps {
  email: string;
  Password: string;
}

function Home() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<FieldValues> = async function (data) {
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };
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
        <Input label="Email" type="email" {...register("email")} />
        <Input label="Senha" type="password" {...register("Password")} />
        <Button
          type="submit"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          <Link href="/dashboard">Enviar</Link>
        </Button>
      </Flex>
    </Flex>
  );
}

export default Home;
