import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componeds/nav/nav'
import { Outlet, useActionData, useLoaderData } from 'react-router-dom'


function App() {


  return (
    <div className="App">
     <Nav></Nav>
    <Outlet></Outlet>
    </div>
  )
}

export default App
