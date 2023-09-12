import { useState } from "react";
import axios from "../axiosConfig.js";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    axios
      .post("/register", { username, email, password })
      .then((res) => {
        if (res.data.error) {
          throw Error(res.data.error);
        }
        toast.success("Registration Successful!\nRedirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="register">
      <Toaster />
      <h2 className="register__title sub-heading">Register:</h2>
      <form className="register__form" onSubmit={register}>
        <input
          className="register__form-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter a username ..."
          required
        />
        <input
          className="register__form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter a email ..."
          required
        />
        <input
          className="register__form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter a password ..."
          required
        />
        <button className="register__form-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
