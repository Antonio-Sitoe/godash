import { Button, Flex } from "@chakra-ui/react";
import Input from "@/components/Form/Input";
import Link from "next/link";

function Home() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justify="center">
      <Flex
        w="100%"
        p={8}
        as="form"
        bg="gray.800"
        maxWidth={500}
        borderRadius={8}
        flexDirection="column"
        gap={6}
      >
        <Input label="Email" name="Email" type="email" />
        <Input label="Senha" name="Senha" type="password" />

        <Button type="submit" colorScheme="pink">
          <Link href="/dashboard">Enviar</Link>
        </Button>
      </Flex>
    </Flex>
  );
}

export default Home;
