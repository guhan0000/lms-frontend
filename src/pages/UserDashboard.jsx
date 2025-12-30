import React from "react";

const UserDashboard = () => {
  return (
    <div className="container mt-2">
      <h2>My Dashboard</h2>
      <h3 className="mt-3">Borrowed History</h3>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Issue Date</th>
              <th>Retur Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;
