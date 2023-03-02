import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>This is the home page</div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
