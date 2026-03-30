import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import DonatePage from './pages/DonatePage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/get-involved', element: <GetInvolvedPage /> },
      { path: '/donate', element: <DonatePage /> },
      { path: '/donate/:category', element: <DonatePage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
