import React, { ElementType } from "react";
import { Text, Link, Icon, LinkProps } from "@chakra-ui/react";

interface INavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
}

function NavLink({ icon, children, ...rest }: INavLinkProps) {
  return (
    <Link display="flex" {...rest} alignItems="center" color="pink.400" py="1">
      <Icon as={icon} fontSize={20} />
      <Text ml="4" fontSize="medium">
        {children}
      </Text>
    </Link>
  );
}

export default NavLink;
