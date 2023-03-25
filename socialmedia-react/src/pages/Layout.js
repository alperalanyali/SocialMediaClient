import { Link, Outlet, useNavigate } from "react-router-dom";

import Login from "./Login";

const Layout = () => {
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.clear();
    navigate("/login");
   }
   
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">My Social Meda</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* Sol taraftaki menüler */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>  
                {/* Sol taraftaki menüler */}

                {/* Sağ taraftaki menüler */}
                <ul class="navbar-nav">
                    <li className="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Profil
                    </a>
                        <ul className="dropdown-menu">
                            <li>
                                <button onClick={logout} class="dropdown-item">Çıkış yap</button>
                            </li>
                        </ul>
                    </li>
                </ul>
                {/* Sağ taraftaki menüler */}
            </div>
        </div>
    </nav>

    <Outlet />
</div>
  );
};
export default Layout;
