import {useState} from "react";
import {Link , useNavigate} from "react-router-dom";
import API from "../services/api";
import {toast} from "react-toastify";

function Login(){
  const navigate=useNavigate();
  const[form,setForm]=useState({
    email:"",
    password:"",
  });
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    });
  };
  const handleLogin=async(e)=>{
    e.preventDefault();
    try{
      const res =await API.post("/users/login",form);
      localStorage.setItem("token",res.data.token);
      toast.success("Login Successfull");
      navigate("/dashboard");
    }catch(err){
      alert(err.response?.data?.message || toast.error("Login Failed"))
    }
  };
  return(
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{width:"400px",borderRadius:"15px"}}>
        <h2 className="text-center mb-4">Task Manager</h2>
        <form onSubmit={handleLogin}>
          <input 
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required/>

            <input 
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required/>
          <button className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">Don't have an account?
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;