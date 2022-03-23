import React from "react";
import { connect } from "react-redux";
import { loginLogout } from "../redux/action";

const LoginPage = ({ logInStatus, onLoginPress }) => {
  return (
    <div className="my-20 w-30 text-center">
      <button
        onClick={() => {
          onLoginPress(true);
        }}
        className="bg-green-500  border-blue-500 border-2 px-4 py-2 rounded-md my-5 mx-5  "
        disabled={logInStatus.isLogged}
      >
        Log In
      </button>
      <button
        onClick={() => {
          onLoginPress(false);
        }}
        className="bg-green-500  border-blue-500 border-2 px-4 py-2 rounded-md my-5 mx-5"
        disabled={!logInStatus.isLogged}
      >
        Log out
      </button>
      {logInStatus.isLogged ? (
        <div className="text-xl"> login Successful</div>
      ) : (
        <div className="text-xl"> Logged out ! Please login</div>
      )}
      {console.log(logInStatus.isLogged)}
    </div>
  );
};

const mapStateToProps = (state) => ({ logInStatus: state.logInStatus });
const mapDispatchToProps = (dispatch) => ({
  onLoginPress: (isLogged) => dispatch(loginLogout(isLogged)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
