import React from "react";
import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputCursorMove,
} from "react-icons/ri";

function SideBar() {
  return (
    <Box as="aside" w="64" mr="8" gap="12" alignItems="flex-start">
      <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">
          GERAL
        </Text>
        <Stack spacing="4" mt="8" align="stretch">
          <Link display="flex" alignItems="center" color="pink.400" py="1">
            <Icon as={RiDashboardLine} fontSize={20} />
            <Text ml="4" fontSize="medium">
              Dashboard
            </Text>
          </Link>
          <Link display="flex" alignItems="center" color="pink.400" py="1">
            <Icon as={RiContactsLine} fontSize={20} />
            <Text ml="4" fontSize="medium">
              Usuarios
            </Text>
          </Link>
        </Stack>
      </Box>
      <Box marginTop="4rem">
        <Text fontWeight="bold" color="gray.400" fontSize="small">
          AUTOMAÇÃO
        </Text>
        <Stack spacing="4" mt="8" align="stretch">
          <Link display="flex" alignItems="center" color="pink.400" py="1">
            <Icon as={RiInputCursorMove} fontSize={20} />
            <Text ml="4" fontSize="medium">
              Formulários
            </Text>
          </Link>
          <Link display="flex" alignItems="center" color="pink.400" py="1">
            <Icon as={RiGitMergeLine} fontSize={20} />
            <Text ml="4" fontSize="medium">
              Automação
            </Text>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}

export default SideBar;
