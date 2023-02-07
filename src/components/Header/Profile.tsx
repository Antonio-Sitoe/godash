import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Isaias Nhantumbo</Text>
          <Text color="gray.300" fontSize="small">
            isaiasjunior@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Antonio Sitoe"
        src="https://github.com/antonio-sitoe.png"
      />
    </Flex>
  );
}
