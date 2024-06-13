
import NavItem from "./NavItem";
import { adminRoutes } from "@/constants/admin-links";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const {pathname} = useLocation();

  // if (!user?.username) {
  //   return (
  //     <ul className="space-y-2 px-2 pt-6 lg:pt-2">
  //       {[...Array(4)].map((_, i) => (
  //         <NavItem.Skeleton key={i} />
  //       ))}
  //     </ul>
  //   );
  // }
  
  return (
    <ul className="space-y-2 px-2 pt-6 lg:pt-2">
      {adminRoutes.map((route) => (
        <NavItem
          key={route.path}
          icon={route.icon}
          label={route.label}
          path={route.path}
          isActive={pathname === route.path}
        />
      ))}
    </ul>
  );
};

export default Navigation;
