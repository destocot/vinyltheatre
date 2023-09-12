import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem
        temporibus possimus non cumque, molestias natus rem id ea saepe
        voluptate consequuntur distinctio labore, tempora perferendis quibusdam.
        Incidunt, architecto ipsa.
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
