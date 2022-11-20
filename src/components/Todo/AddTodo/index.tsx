import { Box, Heading } from "@chakra-ui/react";
import { FormTodo } from "./FormTodo";

export const AddTodo = () => {
  return (
    <Box as="section">
      <Heading fontSize={"24px"} textAlign={"center"}>
        MY TO DO
      </Heading>
      <FormTodo />
    </Box>
  );
};
