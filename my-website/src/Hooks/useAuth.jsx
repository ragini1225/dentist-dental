import React, { useState, useEffect, createContext, useContext } from 'react';
import { authAPI, getAuthToken } from '../services/api';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshUser = async () => {
    const token = getAuthToken();
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await authAPI.getCurrentUser();
      setUser(response.user);
    } catch (error) {
      console.error('Failed to fetch user:', error);
      authAPI.logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authAPI.login(email, password);
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    authAPI.logout();
    setUser(null);
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};