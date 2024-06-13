import AuthContextProvider from "@/contexts/AuthContextProvider";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import AdminSidebar from "../dashboard/admin-sidebar/Sidebar";
import Navbar from "../navbar";
import AuthMiddleware from "../AuthMiddleware";
const AdminDashboardLayout = () => {
  return (
    <AuthContextProvider>
      <AuthMiddleware>
        <ReactQueryProvider>
          <Toaster position="top-center" />
          <Navbar />
          <section className="flex ">
            <AdminSidebar />
            <main className="grow" >
              <Outlet />
            </main>
          </section>
        </ReactQueryProvider>
      </AuthMiddleware>
    </AuthContextProvider>
  );
};

export default AdminDashboardLayout;
