
export const create_todo= "create_todo";
export const createTodo = (text)=>({
    type:create_todo,
    payload: {text}
})

export const remove_todo= "remove_todo"

export const removeTodo= (id)=>({
    type:remove_todo,
    payload:{id}
})

export const mark_as_complete = "mark_as_complete";

export const markAsComplete =(id,isChecked)=>({
    type:mark_as_complete,
    payload:{id,isChecked}
})

export const login_logout = "login_logout";

export const loginLogout= (isLogged)=>({ 
    type:login_logout,
    payload:{isLogged}
})