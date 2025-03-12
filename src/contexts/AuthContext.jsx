import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const user = true;
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

// hook to provide authcontext to any component
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) throw new Error("auth context not found");

  return context;
};
