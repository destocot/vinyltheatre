import { useState } from "react";
import PropTypes from "prop-types";
import axios from "../axiosConfig.js";
import CardMui from "./CardMUI";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import toast, { Toaster } from "react-hot-toast";

export default function Album({ album, setUserAlbums }) {
  const [add, setAdd] = useState(false);

  const addAlbum = () => {
    axios
      .post(
        "/dashboard/add",
        {
          title: album.title.split(" - ")[1],
          artist: album.title.split(" - ")[0],
          cover: album.cover_image,
          master_id: album.master_id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data) {
          if (res.data.error) {
            toast.error(res.data.error);
          } else {
            toast.success("album added");
            setUserAlbums((state) => [
              ...state,
              {
                title: res.data.title,
                artist: res.data.artist,
                cover: res.data.cover,
                master_id: res.data.master_id,
                _id: res.data._id,
              },
            ]);
          }
          setAdd(false);
        } else {
          toast.error("album not found");
        }
      });
  };

  return (
    <div
      className="adder-container user-search__albums"
      onClick={() => {
        if (!add) {
          setAdd(true);
        }
      }}
    >
      <Toaster />
      <CardMui
        album={{
          title: album.title.split(" - ")[1],
          artist: album.title.split(" - ")[0],
          cover: album.cover_image,
        }}
      />
      {add && (
        <div className="album__adder ">
          <button className="album__adder-btn" onClick={() => addAlbum()}>
            <AddIcon fontSize="large" />
          </button>
          <button
            className="album__adder-btn"
            onClick={() => {
              setAdd(false);
            }}
          >
            <ClearIcon fontSize="large" />
          </button>
        </div>
      )}
    </div>
  );
}

Album.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
    cover_image: PropTypes.string,
    master_id: PropTypes.number,
  }),
};
