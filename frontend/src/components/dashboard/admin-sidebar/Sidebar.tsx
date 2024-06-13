import SidebarWrapper from "./SidebarWrapper";
import Navigation from "./Navigation";
import Trigger from "./Trigger";

const AdminSidebar = () => {
  return (
    <SidebarWrapper>
      <Trigger />
      <Navigation />
    </SidebarWrapper>
  );
};

export default AdminSidebar;
