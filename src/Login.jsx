import { Link } from "react-router-dom";




const Login = () => {
    return (
        <div className=" mt-10 mb-10">

            <div>

            <div className="hero     flex-col md:flex-row lg:flex-row ">

            <div className=" flex-col lg:flex-row-reverse    ">
              <div className="text-center lg:text-left mb-5 mt-5">
                <h1 className="text-5xl font-bold">Login now!</h1>
              </div>
              <div className="card shrink-0 w-[500px]  border-[1px] rounded-2xl border-black shadow-2xl bg-base-100 p-5">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                  </div>
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
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>

                <div className=" flex items-center gap-1">
                 <h1 className=" text-xl">Do You Have Already Have an account?</h1>
                
                <Link to="/register" >
                <button className="btn btn-link">Register</button>
                
                </Link>

              



                </div>
              </div>
            </div>
          </div>
          











            </div>
            
        </div>
    );
};

export default Login;