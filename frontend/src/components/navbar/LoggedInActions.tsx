// import CartSheet from "../cart/CartSheet";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";
import { FaShoppingCart } from "react-icons/fa";
import { useAuthContext } from "@/contexts/AuthContextProvider";
import { LayoutDashboard } from "lucide-react";

const LoggedInActions = () => {
  const { isAdmin } = useAuthContext();
  
  return (
    <div className="flex items-center gap-6 capitalize text-[#a9c8e0]">
      {/* <CartSheet>
        <span className="cursor-pointer  flex items-center gap-x-1 border-r px-2.5">
          <FaShoppingCart color="white"/>
        </span>
      </CartSheet> */}
      {isAdmin && (
        <Link to={"/dashboard"}>
          <LayoutDashboard color="white" />
        </Link>
      )}
      <Link to={"/cart"}>
        <FaShoppingCart color="white" />
      </Link>
      <LogOutButton />
    </div>
  );
};

export default LoggedInActions;
