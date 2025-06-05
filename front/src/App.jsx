import "./App.css";
import Login from "./component/Login";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path = "/" element={<Login />} />
        {/* <Route path = "/" element={<Signup />} />
        <Route path = "/" element={<FindIDPW />} /> */}
      </Routes>
    </>
  );
}

export default App;
