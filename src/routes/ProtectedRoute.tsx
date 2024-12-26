import { Navigate } from 'react-router-dom';
import { useStore } from '@/store/useStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useStore((state) => state.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}