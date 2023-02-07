import { Button, Stack, Box } from "@chakra-ui/react";
import React from "react";

function Pagination() {
  return (
    <Stack
      flexDirection="row"
      px="8"
      pb="8"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" align="center" spacing="2" alignItems="center">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ bg: "pink.500", cursor: "default" }}
        >
          1
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{ bg: "gray.500" }}
        >
          {2}
        </Button>
      </Stack>
    </Stack>
  );
}

export default Pagination;
