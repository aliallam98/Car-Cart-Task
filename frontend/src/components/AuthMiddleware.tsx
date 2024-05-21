import { Navigate, useLocation } from "react-router-dom";

import { jwtDecode } from "jwt-decode";

import { DEFAULT_LOGIN_REDIRECT, authRoutes, publicRoutes } from "@/routes";
import { useAuthContext } from "@/contexts/AuthContextProvider";

interface Decoded {
  email: string;
  exp: number;
  iat: number;
  id: string;
  name: string;
  role: string;
}

interface IProps {
  children: string | JSX.Element | JSX.Element[];
}

const AuthMiddleware = ({ children }: IProps) => {
  const { pathname } = useLocation();

  const { authUser } = useAuthContext();

  const isLoggedIn = !!authUser  //Return true | false
  const isPublicRoute =
    publicRoutes.includes(pathname) || pathname.startsWith("/cars");
  const isAuthRoute = authRoutes.includes(pathname);

  console.log("isLoggedIn", isLoggedIn);

  let expirationTime = 0;
  const currentTime = Date.now();

  if (authUser && Object.keys(authUser).length) {
    // console.log("Error");

    const decoded: Decoded = jwtDecode(`${authUser}`) || null; // Explicitly type 'Decoded'

    if (decoded) {
      expirationTime = decoded.exp * 1000;
      // Check if token is expired:
      if (currentTime > expirationTime) {
        return <Navigate to={"/login"} />;
      }
    }
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return <Navigate to={DEFAULT_LOGIN_REDIRECT} />;
    }
    return children;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return <Navigate to={"/login"} />;
  }
  // if (isLoggedIn && !isPublicRoute) {
  //   return <Navigate to={"/"} />;
  // }

  return children;
};

export default AuthMiddleware;
