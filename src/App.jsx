import React from 'react'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'



const App = () => {
  return (
    <>
    <div className='relative'>
    <Header/>
    <NavBar/>
    <Page1/>
    <Page2/>
    <Page3/>
    </div>
    </>
  )
}

export default App