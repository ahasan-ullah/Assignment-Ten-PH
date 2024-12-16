import { NavLink } from "react-router-dom";

const ErrorPage=()=>{
  document.title="Error"
  return(
    <div className="min-h-screen flex flex-col items-center justify-center space-y-5">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <NavLink className="btn bg-orange-500 text-white" to={"/"}>Home Page</NavLink>
    </div>
  )
}
export default ErrorPage;