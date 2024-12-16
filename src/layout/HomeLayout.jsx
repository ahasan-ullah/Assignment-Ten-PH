import { Outlet } from "react-router-dom";
import Footer from "../componets/Footer";
import Navbar from "../componets/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from "../pages/LoadingPage";

const HomeLayout = () => {
  const {loading}=useContext(AuthContext);
  if(loading){
    return <LoadingPage></LoadingPage>
  }
  return (
    <div>
      {/* navbar */}
      <nav className="bg-[#1A1A1A]">
        <Navbar></Navbar>
      </nav>
      {/* Outlet */}
      <Outlet></Outlet>
      {/* footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
export default HomeLayout;
