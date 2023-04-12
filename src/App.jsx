import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componeds/nav/nav'
import Banner from './componeds/banner/Banner'
import Job from './componeds/job/Job'
import { Outlet, useActionData, useLoaderData } from 'react-router-dom'
import Outlets from './componeds/outlets/Outlets'

function App() {


  return (
    <div className="App">
     <Nav></Nav>
    <Outlet></Outlet>

    </div>
  )
}

export default App
