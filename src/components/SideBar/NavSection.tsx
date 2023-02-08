import React, { ReactNode } from "react";
import { Box, Stack, Text, BoxProps } from "@chakra-ui/react";

interface INavSectionProps extends BoxProps {
  children: ReactNode;
  title: string;
}

function NavSection({ children, title, ...rest }: INavSectionProps) {
  return (
    <Box {...rest}>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}

export default NavSection;
