import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useTodoStore } from "../../../../../../stores/todo";

interface iModalEditProps {
  handleCloseModalEdit: () => void;
  isShowModalEdit: boolean;
  todo: string;
}

export const ModalEdit = ({
  handleCloseModalEdit,
  isShowModalEdit,
  todo,
}: iModalEditProps) => {
  const { editTodo } = useTodoStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newValueInput, setNewValueInput] = useState("");

  useEffect(() => {
    setNewValueInput(todo);
  }, []);

  useEffect(() => {
    isShowModalEdit ? onOpen() : onClose();
  }, [isShowModalEdit]);

  useEffect(() => {
    isOpen == false && handleCloseModalEdit();
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todoEdited = newValueInput.trim();
    todoEdited != "" && editTodo(todo, todoEdited);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setNewValueInput(newValue);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Editar TO DO</ModalHeader>
          <ModalCloseButton onClick={handleCloseModalEdit} />
          <ModalBody as={"form"} onSubmit={handleSubmit} p={"25px"}>
            <Input
              value={newValueInput}
              onChange={handleChangeInput}
              focusBorderColor={"#374ab9a6"}
            />
            <Button type="submit" w={"100%"} mt={"16px"}>
              Salvar
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
