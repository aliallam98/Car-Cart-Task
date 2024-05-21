import { Link } from "react-router-dom";

const LoggedOutActions = () => {
  return (
    <div className="flex items-center gap-x-2">
      <button className="uppercase flex items-center border rounded-md py-2 px-4 text-sm text-white">
        <Link to={"/register"}>register</Link>
      </button>
      <button className="uppercase flex items-center border rounded-md py-2 px-4 text-sm text-white">
        <Link to={"/login"}>login</Link>
      </button>
    </div>
  );
};

export default LoggedOutActions;
