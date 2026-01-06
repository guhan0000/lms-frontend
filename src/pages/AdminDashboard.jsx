import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <div className="mb-3">
        <Link className="btn btn-primary" to="/add-book">
          Add Book
        </Link>
      </div>
      <h2>Issued Books</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Issue ID</th>
              <th>Book Title</th>
              <th>Member Email</th>
              <th>Issue Date</th>
              <th>Return Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1</td>
              <td>#asd</td>
              <td>#afnsdlfn</td>
              <td>#kls</td>
              <td>#nglds</td>
              <td>#gnlfkdng</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
