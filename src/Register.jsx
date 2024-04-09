


const Register = () => {
    return (
        <div>
            <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                 
                  <div className="card shrink-0 w-[500px] shadow-2xl bg-base-100">

                    <form className="card-body">
                  {/* ------name */}
                    <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input type="text"  className="input input-bordered" placeholder="Name" />
                      </div>

                      {/* -----email */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                      </div>

                        {/* ------PHOTOURL */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Photo Url</span>
                        </label>
                        <input type="url" name="Photo Url" id="" className="input input-bordered" placeholder="Photo Url"  />
                      </div>

                     {/* ------password */}

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                      </div>

                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
              













            </div>
            
        </div>
    );
};

export default Register;