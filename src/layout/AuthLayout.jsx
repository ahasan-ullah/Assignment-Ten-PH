import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";

const AuthLayout=()=>{
  return(
    <div>
      {/* navbar */}
      <nav>
        <Navbar></Navbar>
      </nav>
      {/* outlet */}
      <Outlet></Outlet>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}
export default AuthLayout