import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home"
import Layout from "./Layout"
import Login from "./Login"
import NotFound from "./NotFound"
import PrivateRouter from "../components/PrivateRouter";
import Register from "./Register";

function App() {
  return (
    <div>
      <PrivateRouter path="/">
          
      </PrivateRouter>
    </div>
  );
}

export default App;
