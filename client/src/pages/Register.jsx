import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import{toast} from "react-toastify";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("users/register", form);

    toast.success("Registration Successfull");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || toast.error("Registraion Failed"));
    }
  };
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div
        className="card shadow p-4"
        style={{ width: "420px", borderRadius: "15px" }}
      >
        <h2 className="text-center mb-4">Create Account</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button className="btn btn-success w-100">Register</button>
        </form>
        <p className="text-center mt-3">
          Already have an account?
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
