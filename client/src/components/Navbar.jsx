import { useNavigate } from "react-router-dom";

function Navbar(){
  const navigate=useNavigate();

  const logout=()=>{
    localStorage.removeItem("token");
    navigate('/');
  };

  return(
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <h3 className="text-white">TaskArea</h3>
        <button className="btn btn-light" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
export default Navbar;