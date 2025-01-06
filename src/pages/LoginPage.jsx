import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const LoginPage = () => {
  const { setUser, loginUser,googleSignIn } = useContext(AuthContext);
  const navigate=useNavigate()
  const loation=useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const pass = form.get("password");

    loginUser(email, pass)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
        swal({
          text: "Login Successful",
          icon: "success",
        });
      })
      .catch(() => {
        swal({
          text: "Please enter valid details",
          icon: "error",
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        //navigate(location?.state ? location.state : "/");
        swal({
          text: "Login Successful",
          icon: "success",
        });
      })
      .catch(() => {
        swal({
          text: "Login Failed",
          icon: "error",
        });
      });
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center mt-10 md:mt-24">
      <h1 className="text-3xl font-bold mt-10">Please Login</h1>
      <div className="card bg-base-100 md:w-3/5 mx-auto">
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6 space-y-4">
            <button className="p-3 rounded-lg bg-second">Login</button>
          </div>
        </form>
      </div>
      <div className="card card-body bg-base-100 md:w-3/5 mx-auto -top-8">
        <button onClick={handleGoogleSignIn} className="p-3 rounded-lg bg-second">
          Login in with Google
        </button>
        <p className="text-gray-500 text-sm">
          Don't have an account?
          <NavLink to={"/auth/register"} className="text-blue-700">
            {" "}
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
