import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import { useTodoStore } from "../../../../stores/todo";

export const FormTodo = () => {
  const { addTodo } = useTodoStore();
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo = todoInput.trim();

    if (newTodo != "") {
      addTodo(newTodo);
      setTodoInput("");
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  return (
    <Flex as={"form"} onSubmit={handleSubmit} mt="16px" gap="10px">
      <Input
        type={"text"}
        placeholder={"Adicione algo xD"}
        value={todoInput}
        onChange={handleChangeInput}
        focusBorderColor={"#374ab9a6"}
      />
      <Button type="submit">Adicionar</Button>
    </Flex>
  );
};
