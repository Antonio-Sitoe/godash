import React from "react";
import { Box } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputCursorMove,
} from "react-icons/ri";
import NavSection from "./NavSection";
import NavLink from "./NavLink";

function SideBarNav() {
  return (
    <Box as="aside" w="64" mr="8" gap="12" alignItems="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiContactsLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiDashboardLine}>
          Usuario
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMACAO" marginTop={8}>
        <NavLink href="/users/create" icon={RiInputCursorMove}>
          Formulários
        </NavLink>
        <NavLink href="/dashboard" icon={RiGitMergeLine}>
          Automação
        </NavLink>
      </NavSection>
    </Box>
  );
}

export default SideBarNav;
