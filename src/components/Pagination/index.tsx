import { Button, Stack, Box } from "@chakra-ui/react";
import React from "react";
import PaginationItem from "./PaginationItem";

function Pagination() {
  return (
    <Stack
      flexDirection={["column", "row"]}
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
        <PaginationItem number={1} isCurrentPage={true} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
      </Stack>
    </Stack>
  );
}

export default Pagination;
