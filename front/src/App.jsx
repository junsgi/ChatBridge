import "./App.css";
import FindIDPW from "./modules/FindIDPW";
import Login from "./modules/Login";
import MainPage from "./modules/MainPage";
import Signup from "./modules/Signup";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/signup" element={<Signup />} />
        <Route path = "/findIDPW" element = {<FindIDPW />}/>
        <Route path = "/main" element = {<MainPage />}/>
      </Routes>
    </>
  );
}

export default App;
