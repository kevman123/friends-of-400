import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import DonatePage from './pages/DonatePage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AdminLayout from './components/layout/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminDonations from './pages/admin/AdminDonations';
import AdminContacts from './pages/admin/AdminContacts';
import AdminImages from './pages/admin/AdminImages';
import { AuthProvider } from './contexts/AuthContext';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/get-involved', element: <GetInvolvedPage /> },
      { path: '/donate', element: <DonatePage /> },
      { path: '/donate/:category', element: <DonatePage /> },
      {
        path: '/admin',
        element: <ProtectedRoute />,
        children: [
          {
            element: <AdminLayout />,
            children: [
              { index: true, element: <AdminDashboard /> },
              { path: 'donations', element: <AdminDonations /> },
              { path: 'contacts', element: <AdminContacts /> },
              { path: 'images', element: <AdminImages /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
