import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CardMui from "./CardMUI";
import ClearIcon from "@mui/icons-material/Clear";

export default function Album({ album }) {
  const [add, setAdd] = useState(false);

  const addAlbum = () => {
    axios
      .post(
        "http://localhost:5001/dashboard/add",
        {
          title: album.title.split(" - ")[1],
          artist: album.title.split(" - ")[0],
          cover: album.cover_image,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data) {
          console.log("album added", res.data, "!!!");
        } else {
          alert("album not found");
        }
      });
  };

  return (
    <div
      className="adder-container"
      onClick={() => {
        if (!add) {
          setAdd(true);
        }
      }}
    >
      <CardMui
        album={{
          title: album.title.split(" - ")[1],
          artist: album.title.split(" - ")[0],
          cover: album.cover_image,
        }}
      />
      {add && (
        <div className="album__adder">
          <button className="album__adder-btn" onClick={() => addAlbum()}>
            +
          </button>
          <button
            className="album__adder-btn"
            onClick={() => {
              setAdd(false);
            }}
          >
            <ClearIcon />
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
  }),
};
