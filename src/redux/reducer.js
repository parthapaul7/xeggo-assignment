import {
  create_todo,
  mark_as_complete,
  remove_todo,
  login_logout,
} from "./action";

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
      const { id, isChecked } = payload;
      const newArr = [...state];
      newArr[id].isComplete = isChecked;
      return newArr;
    }

    default:
      return state;
  }
};

export const logInStatus = (state={isLogged:false},action)=>{
  const {type,payload} = action
  switch (type) {
    case login_logout:
      const {isLogged} =payload;
      const newObj = {...state}
      newObj.isLogged= isLogged;
      return newObj
      
      
      break;
  
    default:
      return state
      break;
  }

}