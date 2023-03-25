import { Redirect, Route } from "react-router-dom";
function PrivateRoute({ children, ...rest }) {
    const isLoggedIn = true; // Kullanıcının giriş yaptığını kontrol edin (bu sadece örnek)
  
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;
  