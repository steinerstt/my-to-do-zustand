import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useTodoStore } from "../../../stores/todo";
import { Card } from "./Card";

export const ListTodo = () => {
  const { todos, getStorageUpdateTodos } = useTodoStore();

  useEffect(() => {
    getStorageUpdateTodos();
  }, []);

  if (todos.length < 1) {
    return null;
  }

  const cards = todos.map((todo) => <Card key={todo} todo={todo} />);

  return (
    <Flex as={"ul"} mt="16px" direction={"column"} gap={"8px"}>
      {cards}
    </Flex>
  );
};
