import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import AuthContextProvider from "@/contexts/AuthContextProvider";
import Footer from "../footer";
import { Toaster } from "sonner";
import AuthMiddleware from "../AuthMiddleware";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const MainLayout = () => {
  return (
    <>
      <AuthContextProvider>
        <ReactQueryProvider>
          <AuthMiddleware>
            <Toaster />
            <Navbar />
            <main>
              <Outlet />
            </main>
            <Footer />
          </AuthMiddleware>
        </ReactQueryProvider>
      </AuthContextProvider>
    </>
  );
};

export default MainLayout;
