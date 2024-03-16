import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="navbar-brand px-3 py-3 max-w-32" href="/">
      <img src="../assets/logo/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
