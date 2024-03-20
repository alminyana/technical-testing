import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './components/notfound/NotFoundPage';
import FetchData from './components/fetchData/FetchData';
import PostData from './components/postData/PostData';
import DashboardWrapper from './components/dashboard/DashboardWrapper';
import ProfilesPage from './components/profiles/ProfilesPage';
import SingleProfilePage from './components/profiles/SingleProfilePage';
import FetchDataTable from './components/fetchDataTable/FetchDataTable';
import ContextTwo from './components/contextTwo/ContextTwo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
          path: '/fetch',
          element: <FetchData />,
      },
      {
          path: '/post',
          element: <PostData />,
      },
      {
        path: '/context',
        element: <DashboardWrapper />
      },
      {
        path: '/profiles',
        element: <ProfilesPage />,
        children: [
          {
            path: '/profiles/:profileId',
            element: <SingleProfilePage />,
          }
        ]
      },
      {
        path: '/fetch-table',
        element: <FetchDataTable />
      },
      {
        path: '/context-two',
        element: <ContextTwo />
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
