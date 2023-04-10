import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componeds/nav/nav'
import Banner from './componeds/banner/Banner'
import Job from './componeds/job/Job'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Nav></Nav>
     <Banner></Banner>
     <Job></Job>

    </div>
  )
}

export default App
