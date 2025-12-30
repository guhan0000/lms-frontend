import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark navbar-dark fixed-top">
      <div className="container">
        <div className="navbar-brand">LMS</div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* <p className="nav-link">Login</p> */}
              <a href="#">Login</a>
            </li>
            <li className="nav-item">
              {/* <p className="nav-link">Signup</p> */}
              <a href="#">SignUp</a>
            </li>
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
