import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout';
import Apps from './Pages/Apps/Apps';
import InstallApp from './Pages/installApps/InstalledApp';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import HomePage from './HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: '/apps',
        Component: Apps
      },
      {
        path: '/installedApps',
        Component: InstallApp
      },
    ],

    errorElement: <NotFoundPage></NotFoundPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
