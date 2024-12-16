import { useContext } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../provider/AuthProvider";

const RegisterPage = () => {
  const { registerUser, setUser, updateUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const pass = form.get("pass");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(pass)) {
      swal({
        text: "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
        icon: "error",
      });
      return;
    }

    registerUser(email, pass)
      .then((result) => {
        setUser(result.user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            swal({
              text: "Registration Successful",
              icon: "success",
            });
          })
          .catch(() => {
            swal({
              text: "Registration update Failed",
              icon: "error",
            });
          });
      })
      .catch((err) => {
        swal({
          text: "Registration Failed",
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mt-10">Register Now</h1>
      <div className="card bg-base-100 md:w-3/5 mx-auto">
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>
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
              name="pass"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6 space-y-4">
            <button className="btn btn-error">Register</button>
            <p className="text-gray-500 text-sm">
              Already have an account?
              <NavLink to={"/auth/login"} className="text-blue-700">
                {" "}
                Login
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
