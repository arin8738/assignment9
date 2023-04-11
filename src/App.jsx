import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componeds/nav/nav'
import Banner from './componeds/banner/Banner'
import Job from './componeds/job/Job'
import { useActionData, useLoaderData } from 'react-router-dom'
import Outlets from './componeds/outlets/Outlets'

function App() {
  // const [count, setCount] = useState(0)
  // const JobClist = useLoaderData();


  return (
    <div className="App">
     <Nav></Nav>
     {/* <Banner></Banner> */}
     {/* <Job JobClist={JobClist}></Job> */}
     <Outlets></Outlets>

    </div>
  )
}

export default App
