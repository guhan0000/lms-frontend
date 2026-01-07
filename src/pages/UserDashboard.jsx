import React, { useEffect, useState } from "react";
import api from "../services/api";
const UserDashboard = () => {
  const [history, setHistory] = useState([]);
  const getUserHistory = async () => {
    try {
      const response = await api.get("/api/issues/history/");
      setHistory(response.data);
    } catch (error) {
      console.log("error in getting user history", error);
    }
  };
  useEffect(() => {
    getUserHistory();
  }, []);
  const handleReturn = async (id) => {
    try {
      // if (window.confirm("are u sure want to return this book?")) {
      await api.post(`/api/issues/return/${id}`);
      alert("book returned successfully");
      getUserHistory();
      // }
    } catch (error) {
      console.log("error in returning book", error);
    }
  };
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
          <tbody>
            {history.map((issue, index) => (
              <tr key={index}>
                <td>{issue.book.title}</td>
                <td>{issue.book.author}</td>
                <td>{issue.issueDate}</td>
                <td>{issue.returnDate}</td>
                <td>{issue.status}</td>
                <td>
                  {issue.status === "ISSUED" && (
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => {
                        handleReturn(issue.book.bookId);
                      }}
                    >
                      Return
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;
