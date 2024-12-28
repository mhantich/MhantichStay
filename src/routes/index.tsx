import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/HomePage';
import { RoomsPage } from '@/pages/RoomsPage';
import { BookingPage } from '@/pages/BookingPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ProtectedRoute } from './ProtectedRoute';
import Login from '@/pages/Login';
import Singup from '@/pages/Singup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'rooms', element: <RoomsPage /> },
      { path: 'booking', element: <BookingPage /> },
      { path: 'login', element: <Login /> },
      { path: 'singup', element: <Singup /> },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);