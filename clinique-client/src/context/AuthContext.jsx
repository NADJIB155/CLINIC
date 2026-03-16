import React, { createContext, useState, useContext } from 'react';
import { api } from '../services/mockApi';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means not logged in
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setAuthLoading(true);
    setError(null);
    try {
      const userData = await api.login(email, password);
      setUser(userData);
      return userData; // return data for redirecting component
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, authLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
