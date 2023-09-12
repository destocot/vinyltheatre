import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

export default function CardMui({ album }) {
  return (
    <CardActionArea>
      <Card sx={{ maxWidth: 345, height: 400, border: "2px solid white" }}>
        <CardMedia
          component="img"
          image={album.cover}
          alt="album cover"
          style={{ aspectRatio: "1/1" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {album.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {album.artist}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

CardMui.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    cover: PropTypes.string,
  }),
};
