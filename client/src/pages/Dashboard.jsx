import { useEffect, useState } from "react";
import axios from "../axiosConfig.js";
import Album from "../components/Album";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/store";
import CardMui from "../components/CardMUI";
import ClearIcon from "@mui/icons-material/Clear";
import "../styles/Dashboard.css";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import toast, { Toaster } from "react-hot-toast";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TuneIcon from "@mui/icons-material/Tune";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
  const [edit, setEdit] = useState(false);
  const [info, setInfo] = useState(false);
  const clearMeta = {
    genres: [],
    styles: [],
    tracklist: [],
    year: 2023,
    artist: "",
    title: "",
    cover: "",
    video: "",
  };
  const [meta, setMeta] = useState(clearMeta);

  const handleSearch = () => {
    axios
      .post("/api/discogs", {
        albumTitle,
        artist,
        perPage: 5,
      })
      .then((results) => {
        console.log(results.data);
        setAlbums(results.data);
      })
      .catch((error) => console.log(error));
  };

  const handleInformation = (master_id, title, artist, cover) => {
    setMeta(clearMeta);
    axios
      .get(`/api/discogs/information/${master_id}`)
      .then((results) => {
        if (results.data.error) {
          throw results.data.error;
        }
        results.data.video = results.data.video.split("/watch?v=")[1];
        setMeta({ title, artist, cover, ...results.data });
        setInfo(true);
      })
      .catch((error) => toast.error(error));
  };

  const handleDelete = (albumId) => {
    axios
      .delete(`/dashboard/delete/${albumId}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          setUserAlbums((state) =>
            state.filter((album) => album._id !== albumId)
          );
          toast.success("album successfully deleted");
          setEdit(false);
        } else {
          toast.error("album not found");
        }
      })
      .catch(() => {
        toast.error("internal error");
      });
  };

  useEffect(() => {
    axios
      .get("/dashboard/albums", {
        withCredentials: true,
      })
      .then((res) => {
        setUserAlbums(res.data);
      })
      .catch(() => {
        removeAccess();
        navigate("/login");
      });
  }, [navigate, removeAccess]);

  return (
    <div className="dashboard">
      <Toaster />
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
            <SearchIcon />
          </button>
          {(albumTitle || artist || albums.length) && (
            <button
              className="dashboard-clear__btn"
              onClick={() => {
                setAlbumTitle("");
                setArtist("");
                setAlbums([]);
              }}
            >
              <ClearIcon className="dashboard-search__clear" />
            </button>
          )}
        </div>
        <div className="albums">
          {albums.map((album, index) => (
            <Album key={index} album={album} setUserAlbums={setUserAlbums} />
          ))}
        </div>
      </div>
      <h2 className="dashboard__user sub-heading">
        {name}&apos;s Profile{" "}
        {!info && (
          <button
            className="meta__return"
            onClick={() => setEdit((state) => !state)}
          >
            <TuneIcon />
          </button>
        )}
        {info && (
          <>
            - Album: {meta.title}
            <button className="meta__return" onClick={() => setInfo(false)}>
              <ArrowBackIcon />
            </button>
          </>
        )}
      </h2>
      {!info && (
        <div className="albums">
          {userAlbums.map((album) => (
            <div className="dashboard-album" key={album._id}>
              <CardMui album={album} />
              {edit && (
                <div className="album__adder">
                  <button
                    className="album__adder-btn"
                    onClick={() => {
                      handleInformation(
                        album.master_id,
                        album.title,
                        album.artist,
                        album.cover
                      );
                    }}
                  >
                    <InfoIcon fontSize="medium" />
                  </button>
                  <button
                    className="album__adder-btn"
                    onClick={() => handleDelete(album._id)}
                  >
                    <DeleteIcon fontSize="medium" />
                  </button>
                  <button
                    className="album__adder-btn"
                    onClick={() => {
                      setEdit(false);
                    }}
                  >
                    <ClearIcon fontSize="medium" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {info && (
        <div className="meta-container">
          <div className="left-side">
            <p className="meta__artist">{meta.artist}</p>
            <p className="meta__title">
              {meta.title}
              <Popup
                trigger={
                  <button className="button meta__video-btn">
                    <YouTubeIcon fontSize="large" />
                  </button>
                }
                modal
              >
                {(close) => (
                  <div className="modal meta__modal">
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${meta.video}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                    <button
                      className="button"
                      onClick={() => {
                        close();
                      }}
                    >
                      close modal
                    </button>
                  </div>
                )}
              </Popup>
            </p>
            <p className="meta__info">Genres: {meta.genres.join(" ")}</p>
            <p className="meta__info">Styles: {meta.styles.join(" ")}</p>
            <div className="meta__tracks">
              Tracklist{" "}
              {meta.tracklist.map((track, index) => (
                <span key={index}>
                  {index + 1}. {track}
                </span>
              ))}
            </div>
          </div>
          <div className="right-side">
            <img className="meta__img" src={meta.cover} alt="album cover" />
          </div>
        </div>
      )}
    </div>
  );
}
