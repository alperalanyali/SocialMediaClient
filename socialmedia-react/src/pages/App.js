import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home"
import Layout from "./Layout"
import Login from "./Login"
import NotFound from "./NotFound"
import PrivateRoute from "../components/PrivateRoute";
import Profile from "./Profile";
import Register from "./Register";

function App() {
  function isLoggedIn() {
    const user = localStorage.getItem("user"); // Kullanıcının bilgilerini localStorage'dan alın
  
    return user ? true : false; // Kullanıcının var olup olmadığını kontrol edin
  }
  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Home/>}></Route>
                  <Route path="profile" element={<Profile/>}></Route>
                  <Route path="*" element={<NotFound/>}></Route>
              </Route>

           
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
