import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Outlets from './componeds/outlets/Outlets'
import Statistics from './componeds/Statistics/Statistics'
import ViewDetails from './componeds/ViewDetails/ViewDetails'
import Blog from './componeds/Blog/Blog'
import ErrorPage from './componeds/Error/Error-page'
import Appliedjob from './componeds/Appliedjobs/Appliedjob'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement : <ErrorPage></ErrorPage>,

  children: [
      {
        path: "/",
        element: <Outlets></Outlets>,
        loader: () => fetch("Joblist.json"),
      },
      {
        path : "Statistics",
        element : <Statistics></Statistics>,
      },
      {
        path : "Applied-jobs",
        element : <Appliedjob></Appliedjob>
      },
      {
        path : "Blog",
        element : <Blog></Blog>,
      },
      {
        path : "/view-details/:jobID",
        element : <ViewDetails></ViewDetails>,
        loader : () => fetch('FeatureJobs.json')
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
