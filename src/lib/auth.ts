export const login = (username?: string, password?: string) => {
  const adminUser = process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'admin';
  const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin';

  if (username === adminUser && password === adminPass) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('isAuthenticated', 'true');
    }
    return true;
  }
  return false;
};

export const logout = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('isAuthenticated');
  }
};

export const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('isAuthenticated') === 'true';
  }
  return false;
};
