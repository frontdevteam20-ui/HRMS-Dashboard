import { createContext, useContext, useState } from "react";
import { loginApi } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (username, password) => {

    try {

      console.log('AuthContext: Attempting login with', username);
      const response = await loginApi(username, password);
      console.log('AuthContext: API response', response);

      if (response.status === "200") {

        // save token
        localStorage.setItem("token", response.token);

        // save user data
        localStorage.setItem("user", JSON.stringify(response.user_data));

        setUser(response.user_data);

        return { success: true };

      } else {
        console.log('AuthContext: Login failed with response', response);
        return { success: false, error: response.message || 'Login failed' };
      }

    } catch (err) {
      console.error('AuthContext: Login error', err);
      return { success: false, error: "Server error" };
    }

  };

  return (
    <AuthContext.Provider value={{ login, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);