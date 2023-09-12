import { useEffect, useState } from "react";
import axios from "axios";
import Album from "../components/Album";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/store";
import CardMui from "../components/CardMUI";
import ClearIcon from "@mui/icons-material/Clear";

export default function Dashboard() {
  const navigate = useNavigate();
  const [albumTitle, setAlbumTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [name, removeAccess] = useStore((state) => [
    state.name,
    state.removeAccess,
  ]);

  const [userAlbums, setUserAlbums] = useState([]);
  const [albums, setAlbums] = useState([]);

  const handleSearch = () => {
    axios
      .post("http://localhost:5001/api/discogs", {
        albumTitle,
        artist,
        perPage: 5,
      })
      .then((results) => {
        setAlbums(results.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5001/dashboard/albums", {
        withCredentials: true,
      })
      .then((res) => {
        setUserAlbums(res.data);
      })
      .catch(() => {
        removeAccess();
        navigate("/login");
      });
  }, []);

  return (
    <div className="dashboard">
      <h2 className="dashboard__user sub-heading">{name}</h2>
      <div className="albums">
        {userAlbums.map((album) => (
          <CardMui key={album._id} album={album} />
        ))}
      </div>
      <div>
        <h2 className="sub-heading">
          search for an album to add to your profile
        </h2>
        <div className="dashboard-search">
          <input
            className="dashboard-search__input"
            type="text"
            value={albumTitle}
            onChange={(e) => setAlbumTitle(e.target.value)}
            placeholder="Enter an album title..."
          />
          <input
            className="dashboard-search__input"
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Enter an artist..."
          />
          <button
            className="dashboard-search__btn"
            type="button"
            onClick={() => handleSearch()}
          >
            Search
          </button>
          {(albumTitle || artist) && (
            <ClearIcon
              className="dashboard-search__clear"
              onClick={() => {
                setAlbumTitle("");
                setArtist("");
              }}
            />
          )}
        </div>
        <div className="albums">
          {albums.map((album, index) => (
            <Album key={index} album={album} />
          ))}
        </div>
      </div>
    </div>
  );
}
