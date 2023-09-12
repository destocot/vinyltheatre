import { Link } from "react-router-dom";

const notFoundPhotos = [
  "https://plus.unsplash.com/premium_photo-1661813434310-98cca4c9135e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
  "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
  "https://images.unsplash.com/photo-1543615294-40348f9cf5df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
  "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1599154643370-e72d0ab2720a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
];

const i = Math.floor(Math.random() * notFoundPhotos.length);

export default function NotFound() {
  return (
    <div className="not-found-container">
      <img
        className="not-found__img"
        src={notFoundPhotos[i]}
        alt="giraffe photo"
      />
      <h2 className="not-found__title">Page not found!</h2>
      <p className="not-found__link">
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
