import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"
import LoginPage from "../pages/LoginPage";

const PrivateRoutes=({children})=>{
  const {user,loading}=useContext(AuthContext);
  if(loading){
    return <LoginPage></LoginPage>
  }
  if(user && user?.email){
    return children;
  }
  return(
    <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
  )
}
export default PrivateRoutes;