import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

function App() {
  return (
    <>
      <Router>
        Hello World - FruitMe
        <main>
          <Routes>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart" component={CartScreen} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App

//ToDo:
//Navbar
//SideDrawer
//Backdrop
//HomeScreen
//ProductScreen
//CartScreen
