import { useState } from "react";
import axios from "../axiosConfig.js";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useStore } from "../store/store";
import "../styles/Form.css";

export default function Login() {
  const navigate = useNavigate();
  const [allowAccess, changeName] = useStore((state) => [
    state.allowAccess,
    state.changeName,
  ]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    axios
      .post(
        "/login",
        { username, password },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        allowAccess();
        changeName(username);
        toast.success("Login Successful!\nRedirecting to your dashboard...", {
          duration: 1000,
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="login">
        <h2 className="login__title sub-heading">Login:</h2>
        <form className="login__form" onSubmit={login}>
          <input
            className="login__form-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username..."
            required
          />
          <input
            className="login__form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password ..."
            required
          />
          <button className="login__form-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
