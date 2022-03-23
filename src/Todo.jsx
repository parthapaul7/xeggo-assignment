import React from "react";
import TodoInput from "./components/TodoInput";
import TodoCard from "./components/TodoCard";
import { connect } from "react-redux";

const Todo = ({ logInStatus }) => {
  return (
    <>
      {logInStatus.isLogged ? (
        <>
          <TodoInput />
          <TodoCard />
        </>
      ) : (
        <div className="text-center text-xl text-red-500 my-20">
          Not logged! Login To View
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({ logInStatus: state.logInStatus });
export default connect(mapStateToProps)(Todo);
