import HomeScreenHeader from '../components/HomeScreenHeader'
import Product from '../components/Product'
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <>
    <div className="homescreen">
      <HomeScreenHeader />
    <h2 className="homescreen__title">
      Products
      </h2>
    <div className="homescreen__products">
      <Product />
    </div>
  </div>
  </>
)}

export default HomeScreen
