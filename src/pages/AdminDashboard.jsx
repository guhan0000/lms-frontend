import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const AdminDashboard = () => {
  const [history, setHistory] = useState([]);
  const fetchAdminHistory = async () => {
    try {
      const response = await api.get("/api/issues/admin/history");
      setHistory(response.data);
    } catch (error) {
      console.log("error in getting admin history", error);
    }
  };
  useEffect(() => {
    fetchAdminHistory();
  }, []);
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
            {history.map((issue) => (
              <tr key={issue.issueId}>
                <td>{issue.issueId}</td>
                <td>{issue.book.bookId}</td>
                <td>{issue.user.email}</td>
                <td>{issue.issueDate}</td>
                <td>{issue.returnDate}</td>
                <td>{issue.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
