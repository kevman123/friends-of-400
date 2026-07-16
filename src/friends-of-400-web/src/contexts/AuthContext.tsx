import { useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { AuthUser } from '../types';
import { getAuthUser, logout as apiLogout } from '../services/api';
import { AuthContext } from './auth-context';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAuthUser()
      .then((u) => setUser(u.isAuthenticated ? u : null))
      .finally(() => setLoading(false));
  }, []);

  const login = useCallback(() => {
    window.location.href = '/api/auth/login';
  }, []);

  const logout = useCallback(async () => {
    await apiLogout();
    setUser(null);
  }, []);

  return (
    <AuthContext value={{ user, loading, login, logout }}>
      {children}
    </AuthContext>
  );
}
