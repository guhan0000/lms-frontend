import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg  bg-dark navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LMS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    SignUp
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                {user.role === "ADMIN" ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin">
                        Admin Dashboard
                      </Link>
                    </li>
                  </>
                ) : (
                  user.role === "MEMBER" && (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                          Dashboard
                        </Link>
                      </li>
                    </>
                  )
                )}
                <li className="nav-item">
                  <Link className="btn nav-link" onClick={handleLogout}>
                    LogOut
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <p className="text-success">Library System</p>
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">Login</li>
//             <li className="nav-item">Signup</li>

//             <li className="nav-item">Home</li>
//             <li className="nav-item">Admin Dashboard</li>

//             <li className="nav-item">My Dashboard</li>

//             <li className="nav-item">
//               <button className="btn btn-link nav-link">Logout</button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
