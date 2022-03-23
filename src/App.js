import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import Todo from "./Todo";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import LoginPage from "./components/LoginPage"

const store = configureStore();
const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loadiing......</div>} persistor={persistor}>
        {/* <Todo /> */}
       <LoginPage/> 
      </PersistGate>
    </Provider>
  );
}

export default App;
