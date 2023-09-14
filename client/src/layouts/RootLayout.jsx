import { NavLink, Link, Outlet } from "react-router-dom";
import { useStore } from "../store/store";
import AlbumIcon from "@mui/icons-material/Album";
import axios from "../axiosConfig.js";
import toast, { Toaster } from "react-hot-toast";

export default function RootLayout() {
  const [access, removeAccess] = useStore((state) => [
    state.access,
    state.removeAccess,
  ]);

  const logoutHandler = () => {
    axios
      .get("/logout", {
        withCredentials: true,
      })
      .then(() => {
        removeAccess();
        toast.success("logout successful", { duration: 750 });
      })
      .catch(() => {
        toast.error("error logging out");
      });
  };

  return (
    <div>
      <Toaster />
      <header className="header">
        <nav className="nav">
          <h1 className="title">
            VinylTheatre <AlbumIcon fontSize="48px" />
          </h1>
          <NavLink className="nav__link" to="/">
            Home
          </NavLink>
          {!access && (
            <NavLink className="nav__link" to="/login">
              Login
            </NavLink>
          )}
          {!access && (
            <NavLink className="nav__link" to="/register">
              Register
            </NavLink>
          )}
          {access && (
            <NavLink className="nav__link" to="/dashboard">
              Dashboard
            </NavLink>
          )}
          {access && (
            <Link
              className="nav__link logout"
              to="/"
              onClick={() => logoutHandler()}
              replace={true}
            >
              Logout
            </Link>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <span>&copy; Khurram Ali - VinylTheatre - 2023</span>
      </footer>
    </div>
  );
}
