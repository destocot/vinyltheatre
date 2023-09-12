import axios from "axios";
import { useEffect, useState } from "react";
import CardMUI from "./CardMUI";

export default function RecentlyAdded() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/recent")
      .then((results) => {
        setAlbums(results.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="sub-heading">Recently Added Albums</h2>
      <div className="albums">
        {albums.map((album) => (
          <CardMUI key={album._id} album={album} />
        ))}
      </div>
    </div>
  );
}
