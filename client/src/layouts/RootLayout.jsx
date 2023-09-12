import { NavLink, Outlet } from "react-router-dom";
import { useStore } from "../store/store";
import AlbumIcon from "@mui/icons-material/Album";

export default function RootLayout() {
  const [access] = useStore((state) => [state.access]);

  return (
    <div>
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
