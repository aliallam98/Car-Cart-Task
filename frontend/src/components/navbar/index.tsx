import { NavLinks } from "@/constants";
import Logo from "../Logo";
import LoggedInActions from "./LoggedInActions";
import LoggedOutActions from "./LoggedOutActions";
import NavLink from "./NavLink";
import { useAuthContext } from "@/contexts/AuthContextProvider";
import { ClockIcon } from "@radix-ui/react-icons";
import { BiPlanet } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { authUser } = useAuthContext();
  const {pathname} = useLocation();

  


  return (
    <header className="pt-4">
      <div className="w-full flex  items-center justify-between px-14 py-3">
        {/* Logo */}
        <Logo />
        {/* Middle  */}
        <div className="flex justify-between items-center gap-20 text-heavyBlueColor">
          <div className="flex items-center gap-4">
            <BiPlanet className="size-12" />
            <div className="space-y-2">
              <h3 className="font-semibold text-xl">Dubai</h3>
              <p className="font-semibold text-lg">
                Marsa Plaza North-Dubai Festival City
              </p>
            </div>
          </div>

        </div>
        <div className="flex items-center  gap-4">
            <ClockIcon className="size-12" />
            <div className="space-y-2">
              <h3 className="font-semibold text-xl">Sunday to Friday</h3>
              <p className="font-semibold text-lg">10am - 7pm</p>
            </div>
          </div>
        {/* Action Logged in - logged out */}
      </div>
      <nav className="w-full flex items-center justify-between  bg-heavyBlueColor p-4">
        {/* Nav Links */}
        <ul className="w-full flex items-center ">
          {NavLinks.map((link, i) => {
            const isActive = pathname === link.href 
            return <NavLink key={i} label={link.label} href={link.href} isActive={isActive}/>;
          })}
        </ul>
        {authUser && Object.keys(authUser).length ? (
          <LoggedInActions />
        ) : (
          <LoggedOutActions />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
