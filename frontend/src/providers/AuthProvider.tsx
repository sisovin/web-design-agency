import React, { createContext, useState, useEffect } from 'react';
import { fetchUser } from '../lib/apiClient';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUser();
      setUser(userData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
