const SignUp = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Signup</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label>Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input type="password" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
