import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import Todo from "./Todo";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const store = configureStore();
const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loadiing......</div>} persistor={persistor}>
        <BrowserRouter>
          <div className="flex text-blue-500 space-x-6 w-[100vw] h-14 items-center justify-center text-xl bg-orange-100">
            <Link to="/">LoginPage</Link>
            <Link to="/todo">Todo</Link>
          </div>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
