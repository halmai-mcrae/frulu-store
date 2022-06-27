import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
//Components
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        FruitMe
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
//SideDrawer
//Backdrop
//HomeScreen
//ProductScreen
//CartScreen - in progress