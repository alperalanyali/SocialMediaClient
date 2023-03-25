import {Navigate, Redirect, Route} from 'react-router-dom'

function PrivateRoute({ children }) {
    function isLoggedIn() {
        const user = localStorage.getItem("user"); // Kullanıcının bilgilerini localStorage'dan alın
      
        return user ? true : false; // Kullanıcının var olup olmadığını kontrol edin
      }
  
    return (
      <Route
        render={({ location }) =>
          isLoggedIn ? (
            children
          ) : (
            <Navigate to="/login" state={{ from: location }} replace />
          )
        }
      ></Route>
    );
  }

  export default PrivateRoute;  