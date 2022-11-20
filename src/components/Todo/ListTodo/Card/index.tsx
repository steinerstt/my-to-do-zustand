import { Flex, Text } from "@chakra-ui/react";
import { MenuOptions } from "./MenuOptions";

interface iCardProps {
  todo: string;
}

export const Card = ({ todo }: iCardProps) => {
  return (
    <Flex
      as={"li"}
      p={"10px"}
      alignItems={"center"}
      bg={"#868ba861"}
      borderRadius={"6px"}
      justifyContent={"space-between"}
      _hover={{
        bg: "#6d728f60",
      }}
    >
      <Text>{todo}</Text>

      <MenuOptions todo={todo} />
    </Flex>
  );
};
