import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css'
import axios from "axios";
const root = document.getElementById("root");
axios.defaults.baseURL = "http://localhost:8080/"
ReactDOM.createRoot(root).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
