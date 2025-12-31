import React, { useEffect } from "react";
import api from "../services/api";
const Home = () => {
  const apiFetch = async () => {
    const response = await api.get("/swagger-ui/index.html");
    console.log(response);
  };
  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mt-5">Home</h2>
      <div className="row">
        <div className="col-md mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <h6 className="card-subtitle text-muted mb-2">Guhan</h6>
              <div className="card-text">
                <p>
                  <strong>Category</strong>
                  <br />
                  <strong>Available</strong>
                </p>
              </div>
              <button className="btn btn-success w-100 btn-sm">Borrow</button>
            </div>
          </div>
        </div>
        <div className="col-md mb-4">
          <div className="card">
            <div className="card-body">c2</div>
          </div>
        </div>
        <div className="col-md mb-4">
          <div className="card">
            <div className="card-body">c3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
