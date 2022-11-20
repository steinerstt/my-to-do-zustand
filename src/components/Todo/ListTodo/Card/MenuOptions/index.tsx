import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { SlOptionsVertical } from "react-icons/sl";
import { useTodoStore } from "../../../../../stores/todo";
import { ModalEdit } from "./ModalEdit";

interface iMenuOptionsProps {
  todo: string;
}

export const MenuOptions = ({ todo }: iMenuOptionsProps) => {
  const { deleteTodo } = useTodoStore();
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);

  const handleOpenModalEdit = () => {
    setIsShowModalEdit(true);
  };

  const handleCloseModalEdit = () => {
    setIsShowModalEdit(false);
  };

  return (
    <>
      <Menu>
        <MenuButton>
          <SlOptionsVertical />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleOpenModalEdit}>Editar</MenuItem>
          <MenuItem onClick={() => deleteTodo(todo)}>Excuir</MenuItem>
        </MenuList>
      </Menu>

      <ModalEdit
        handleCloseModalEdit={handleCloseModalEdit}
        isShowModalEdit={isShowModalEdit}
        todo={todo}
      />
    </>
  );
};
