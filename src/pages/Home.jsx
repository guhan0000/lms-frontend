import React, { useContext, useEffect, useState } from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
const Home = () => {
  // const apiFetch = async () => {
  //   const response = await api.get("/swagger-ui/index.html");
  //   console.log(response);
  // };
  const { user, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    try {
      const response = await api.get("/api/books/get/all");
      setBooks(response.data);
    } catch (error) {
      setError(error.message);
    }
  };
  const handleBorrow = async (id) => {
    try {
      console.log(user.role);

      await api.post(`/api/issues/issue/${id}`);
      alert("Book borrowed successfully");
      fetchBooks();
    } catch (error) {
      console.log("Error in Borrowing", error);
      alert("Can't Borrow Book");
    }
  };
  const handleEdit = () => {};
  const handleDelete = async (id) => {
    try {
      if (window.confirm("are you sure want to delete")) {
        await api.delete(`/api/books/delete/${id}`);
        fetchBooks();
      }
    } catch (error) {
      console.log("Error in deleting book", error);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  // useEffect(() => {
  //   apiFetch();
  // }, []);

  return (
    <div className="container mt-4">
      <h2 className="mt-5">Home</h2>
      <div className="row">
        {books.map((book) => (
          <div className="col-md mb-4" key={book.bookId}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle text-muted mb-2">{book.author}</h6>
                <div className="card-text">
                  <p>
                    <strong>{book.category}</strong>
                    <br />
                    <strong>Available: {book.availableCopies}</strong>
                  </p>
                </div>

                {user && user.role === "MEMBER" && (
                  <div className="d-felx justify-content-center">
                    <button
                      className="btn btn-success w-100 btn-sm"
                      onClick={() => {
                        handleBorrow(book.bookId);
                      }}
                      disabled={book.availableCopies <= 0}
                    >
                      {book.availableCopies <= 0 ? "Out of Stock" : "Borrow"}
                    </button>
                  </div>
                )}
                {user && user.role === "ADMIN" && (
                  //
                  //
                  <div className="d-felx justify-content-center align-items-center">
                    <button
                      className="btn btn-secondary btn-sm me-2"
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        handleDelete(book.bookId);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
