import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    isbn: "",
    totalCopies: 1,
  });
  const { id } = useParams();
  const isEdit = !!id;
  useEffect(() => {
    if (isEdit) {
      fetchBook();
    }
  }, [id, isEdit]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  // useEffect(() => {
  //   fetchBook();
  // }, []);
  const fetchBook = async () => {
    try {
      const response = await api.get(`/api/books/get/${id}`);
      setBook(response.data);
    } catch (err) {
      console.log("Error in fetching book", err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await api.put(`/api/books/update/${id}`, book);
      } else {
        await api.post("/api/books/add", book);
      }
      navigate("/");
    } catch (error) {
      console.log("error saving book", error);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              {isEdit ? "Edit Book" : "Add Book"}
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={book.title}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Author</label>
                  <input
                    type="text"
                    className="form-control"
                    name="author"
                    value={book.author}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    value={book.category}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">ISBN</label>
                  <input
                    type="text"
                    className="form-control"
                    name="isbn"
                    value={book.isbn}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Total Copies</label>
                  <input
                    type="number"
                    min={1}
                    className="form-control"
                    name="totalCopies"
                    value={book.totalCopies}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  {isEdit ? "Update" : "Add"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
