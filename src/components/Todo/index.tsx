import { Box } from "@chakra-ui/react";
import { AddTodo } from "./AddTodo";
import { ListTodo } from "./ListTodo";

export const Todo = () => {
  return (
    <Box
      as={"section"}
      p={"26px"}
      w={"90%"}
      maxW={"550px"}
      border={"2px solid #868ba861"}
      _hover={{
        borderColor: "#374ab9a6",
      }}
      borderRadius={"6px"}
      transitionDuration={".5s"}
    >
      <AddTodo />
      <ListTodo />
    </Box>
  );
};
