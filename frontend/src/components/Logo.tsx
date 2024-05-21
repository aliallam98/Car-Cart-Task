import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="flex gap-2">
        <img src="/images/logo.jpg" alt="logo" width={50} height={50} />
        <h1 className="font-bold capitalize text-white">
          Drive Line
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
