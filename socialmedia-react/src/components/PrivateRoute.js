import {Navigate, Route} from 'react-router-dom'

import ErrorPage from '../pages/Error';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile/Profile';

function PrivateRoute({ component: Element, ...rest }) {
  const isLoggedIn = false; // burada isLoggedIn değişkeninin durumunu kontrol edin.
  
  if(isLoggedIn){
    return <Route path='/' element={<Layout/>}></Route>
  }else {
    return <Navigate to="/" />;
  }
}


  export default PrivateRoute;  