import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (userData) => {
    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/users/', userData);
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al registrar usuario', error);
      throw error;
    }
  };
  const login = async (credentials) => {
    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', credentials);
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout}}>
      {children}
    </UserContext.Provider>
  );
}
