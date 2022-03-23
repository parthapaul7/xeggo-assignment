import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createTodo } from "../redux/action";

const TodoInput = ({ onCreatePressed }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    return () => {};
  }, []);

  async function saveData() {
    onCreatePressed(title);
    setTitle("");
  }
  return (
      <div className=" w-[50vw] mx-auto mb-20">
        <h3 className="text-3xl py-10 text-center">Todo List</h3>
        <hr />
        <div className="mb-3">
          <label  className="block text-xl py-4">
            Title 
          </label>
          <input
            type="text"
            className="block border-2 border-yellow-500 rounded-sm  w-[100%] p-5 h-10 my-5"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Example input placeholder"
            value={title}
          />
        </div>
          
        <button
          className=" bg-green-500 rounded px-4 py-2"
          id="postBtn"
          onClick={saveData}
          disabled={title.length === 0}
        >
          Add task 
        </button>
      </div>
  );
};

const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
