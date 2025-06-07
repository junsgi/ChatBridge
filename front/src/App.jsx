import "./App.css";
import Login from "./modules/Login";
import Signup from "./modules/Signup";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
