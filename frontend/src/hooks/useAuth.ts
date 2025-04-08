import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useAuth = () => {
  const { user } = useContext(AuthContext);

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  return {
    user,
    isAdmin,
  };
};

export default useAuth;
