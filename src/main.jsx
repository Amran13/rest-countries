import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import Countries from './component/Countries/Countries.jsx'
import Country from './component/Country/Country.jsx'
import Login from './component/Login/Login.jsx'
import Register from './component/Register/Register.jsx'
import Dashboard from './component/Dashboard/Dashboard.jsx'
import AuthProvider from './component/Provider/AuthProvider.jsx'
import PrivateRoute from './Protected/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/countries',
        element: <PrivateRoute> <Countries></Countries> </PrivateRoute>,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: '/countries/:id',
        element: <PrivateRoute> <Country></Country> </PrivateRoute>,
        loader: ({ params }) => fetch(`https://restcountries.com/v3.1/alpha/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
