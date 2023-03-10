import { Text } from "@chakra-ui/react";
import React from "react";

function Logo() {
  return (
    <Text
      fontSize={["3xl", "2xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="54"
    >
      dashgo
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  );
}

export default Logo;
