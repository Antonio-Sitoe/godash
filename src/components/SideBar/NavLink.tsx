import React, { ElementType } from "react";
import { Text, Link as ChackraLink, Icon, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { ActiveLink } from "./ActiveLink";

interface INavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

function NavLink({ icon, children, href, ...rest }: INavLinkProps) {
  return (
    <ActiveLink href={href}>
      <ChackraLink
        display="flex"
        {...rest}
        alignItems="center"
        color="pink.400"
        py="1"
      >
        <Icon as={icon} fontSize={20} />
        <Text ml="4" fontSize="medium">
          {children}
        </Text>
      </ChackraLink>
    </ActiveLink>
  );
}

export default NavLink;
