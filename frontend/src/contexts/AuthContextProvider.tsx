/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";

interface AuthContextType {
  authUser: Record<any, string> | null;
  setAuthUser: React.Dispatch<React.SetStateAction<any | null>>;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<any | null>>;
}

const AuthContext = createContext<AuthContextType>({
  authUser: null,
  setAuthUser: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("Car-Showroom-jwt") as string)
  );
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, isAdmin, setIsAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
