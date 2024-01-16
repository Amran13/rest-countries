import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import Countries from './component/Countries/Countries.jsx'
import Country from './component/Country/Country.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/countries',
        element : <Countries></Countries>,
        loader : () => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path : '/countries/:id',
        element : <Country></Country>,
        loader : ({params}) => fetch(`https://restcountries.com/v3.1/alpha/${params.id}`)
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
