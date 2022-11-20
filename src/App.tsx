import { Flex } from "@chakra-ui/react";
import { Todo } from "./components/Todo";

const App = () => {
  return (
    <Flex
      as={"main"}
      alignItems={"center"}
      justifyContent={"center"}
      w={"100vw"}
      h={"100vh"}
    >
      <Todo />
    </Flex>
  );
};

export default App;
