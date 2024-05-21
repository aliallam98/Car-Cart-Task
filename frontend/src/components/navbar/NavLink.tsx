import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface IProps {
  label: string;
  href: string;
  isActive:boolean
}
const NavLink = ({ label, href,isActive }: IProps) => {
  return (
    <li className="group">
      <Link className={cn("capitalize text-[#a9c8e0] border-r px-10 group-last:border-none",
        isActive && "text-orangeColor"
      )} to={href}>{label}</Link>
    </li>
  );
};

export default NavLink;





