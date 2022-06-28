import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
//Components
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  return (
    <>
      <Router>
        <Navbar click={() => setSideDrawerOpen(true)}/>
        <SideDrawer show={ sideDrawerOpen } click={() => setSideDrawerOpen(false)} />
        <Backdrop show={ sideDrawerOpen } click={() => setSideDrawerOpen(false)} />
        <main>
          <Routes>
            <Route path="/" element={ <HomeScreen />} />
            <Route path="/product/:id" element={ <ProductScreen /> } />
            <Route path="/cart" element={ <CartScreen />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App

//ToDo:
//Navbar - done
//SideDrawer - in progress
//Backdrop - done
//HomeScreen
//ProductScreen
//CartScreen - done
