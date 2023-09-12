import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CardMui from "./CardMUI";
import ClearIcon from "@mui/icons-material/Clear";

export default function SearchUser() {
  const [username, setUsername] = useState("");
  const [albums, setAlbums] = useState([]);

  const handleSearch = () => {
    axios
      .get(`http://localhost:5001/user/${username}`)
      .then((results) => {
        if (!results.data.length) {
          throw Error("user not found");
        }
        setAlbums(results.data);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <Toaster />
      <h2 className="sub-heading">Search A User&apos;s Favorite Albums</h2>
      <div className="search">
        <input
          className="search__input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter a user..."
        />
        <button
          className="search__btn"
          type="button"
          onClick={() => handleSearch()}
        >
          Search
        </button>
        {username && (
          <ClearIcon
            className="search__clear"
            onClick={() => {
              setAlbums([]);
              setUsername("");
            }}
          />
        )}
      </div>
      <div className="albums">
        {albums.map((album) => (
          <CardMui key={album._id} album={album} />
        ))}
      </div>
    </div>
  );
}
