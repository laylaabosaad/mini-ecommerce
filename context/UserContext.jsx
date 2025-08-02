import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";


export const UserContext = createContext();

function UserProvider({ children }) {
  const [userRole, setUserRole] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const refreshUser = () => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));

    if (cookie) {
      try {
        const token = cookie.split("=")[1];
        const decoded = jwtDecode(token);
        setUserInfo(decoded);
        setUserRole(decoded.role);
        setAuthenticated(true);
      } catch (err) {
        console.error("Invalid token", err);
        setAuthenticated(false);
      }
    } else {
      setAuthenticated(false);
      setUserRole(null);
      setUserInfo(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ role: userRole, userInfo, authenticated, loading, refreshUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
