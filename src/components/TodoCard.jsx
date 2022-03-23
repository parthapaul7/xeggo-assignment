import React from "react";
import { connect } from "react-redux";
import { removeTodo, markAsComplete } from "../redux/action";

const TodoCard = ({ todos, onDeletePressed, onMarkPressed }) => {
  console.log(todos);
  return (
    <div>
      {todos.map((e, i) => (
        <div key={i} className="mx-auto w-[50vw]">
          <hr />
          <input
            type="checkbox"
            className="w-4 h-4"
            checked={e.isComplete}
            onChange={(e) => {
              console.log(e);
              onMarkPressed(i, e.target.checked);
            }}
          ></input>
            <span
              className={`text-xl p-4 w-[80%] inline-block ${
                e.isComplete && "line-through"
              }`}
            >
              {e.text}
            </span>
            <button
              className="bg-red-500 px-4 py-2 rounded"
              onClick={() => {
                onDeletePressed(i);
              }}
            >
              Remove
            </button>
          </div>
      ))}
      <hr />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onDeletePressed: (id) => dispatch(removeTodo(id)),
  onMarkPressed: (id, isChecked) => dispatch(markAsComplete(id, isChecked)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoCard);
