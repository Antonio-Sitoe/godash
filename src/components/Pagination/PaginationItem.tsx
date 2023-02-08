import { Button } from "@chakra-ui/react";
import React from "react";

interface IPaginationItemProps {
  isCurrentPage?: boolean;
  number: number;
}

function PaginationItem({
  isCurrentPage = false,
  number,
}: IPaginationItemProps) {
  if (isCurrentPage)
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bg: "pink.500", cursor: "default" }}
      >
        {number}
      </Button>
    );
  else
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{ bg: "gray.500" }}
      >
        {number}
      </Button>
    );
}

export default PaginationItem;
