import { Outlet } from "react-router-dom";
import Logo from "../Logo";
import AuthContextProvider from "@/contexts/AuthContextProvider";
import { Toaster } from "sonner";
import AuthMiddleware from "../AuthMiddleware";

const AuthLayout = () => {
  return (
    <>
      <AuthContextProvider>
        <AuthMiddleware>
          <Toaster />
          <header className="bg-heavyBlueColor p-8">
            <nav>
              <Logo />
            </nav>
          </header>
          <main className="flex justify-center items-center h-[calc(100vh-150px)]">
            <Outlet />
          </main>
        </AuthMiddleware>
      </AuthContextProvider>
    </>
  );
};

export default AuthLayout;
