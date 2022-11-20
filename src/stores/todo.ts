import { toast } from "react-toastify";
import create from "zustand";

interface iUseTodoStore {
  todos: string[];
  addTodo: (newTodo: string) => void;
  deleteTodo: (todoSelected: string) => void;
  editTodo: (todo: string, todoEdited: string) => void;
  updateLocalStorage: () => void;
  getStorageUpdateTodos: () => void;
}

export const useTodoStore = create<iUseTodoStore>((set, get) => ({
  todos: [],
  addTodo: (newTodo) => {
    const isTodoRegistered = get().todos.some(
      (todo) => todo.toLowerCase() == newTodo.toLowerCase()
    );

    if (!isTodoRegistered) {
      toast.success("TO DO adicionada com sucesso");
      set((state) => ({ todos: [...state.todos, newTodo] }));
      get().updateLocalStorage();
    } else {
      toast.error("Essa TO DO já está cadastrada na lista");
    }
  },
  deleteTodo: (todoSelected) => {
    const prevTodos = get().todos;
    const todosFiltered = prevTodos.filter((todo) => todo != todoSelected);

    toast.success("TO DO deletada com sucesso");
    set({ todos: todosFiltered });
    get().updateLocalStorage();
  },
  editTodo: (todoSelected, todoEdited) => {
    const prevTodos = get().todos;
    const newTodos = prevTodos.map((todo) => {
      if (todo == todoSelected) return todoEdited;
      return todo;
    });

    toast.success("TO DO editada com sucesso");
    set({ todos: newTodos });
    get().updateLocalStorage();
  },
  updateLocalStorage: () => {
    const todos = get().todos;
    localStorage.setItem("@myToDo:todos", JSON.stringify(todos));
  },

  getStorageUpdateTodos: () => {
    const todosLocalStorage = localStorage.getItem("@myToDo:todos");

    if (todosLocalStorage) {
      set(() => ({ todos: [...JSON.parse(todosLocalStorage)] }));
    }
  },
}));
