import { Link } from "react-router-dom";
import './Error.css'

function Error({ title, msg }) {
  return (
    <div className="error-container">
      <h2 className="error-title">{title}</h2>
      <p className="error-msg">{msg}</p>
      <Link to={-1} className="error-link">Go back</Link>
    </div>
  );
}

export default Error;