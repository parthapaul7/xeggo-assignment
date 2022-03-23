import { create_todo, markAsComplete, mark_as_complete, remove_todo } from "./action";

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case create_todo:
      const { text } = payload;

      const newTodo = {
        text,
        isComplete: false,
      };
      return state.concat(newTodo); // concat function doesnot mutate the state value

    case remove_todo: {
      const { id } = payload;
      const newArr = [...state];
      newArr.splice(id, 1);
      return newArr;
    }
    case mark_as_complete: {
      const { id ,isChecked} = payload;
      const newArr = [...state]
      newArr[id].isComplete = isChecked
      return newArr
    }
    default:
      return state;
  }
};
