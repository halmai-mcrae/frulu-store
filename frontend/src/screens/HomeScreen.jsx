import HomeScreenHeader from '../components/HomeScreenHeader'
import Product from '../components/Product'
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <>
      <div className="homescreen">
        <HomeScreenHeader />
      <h2 className="homescreen__title">
      ONE INGREDIENT.
      <span style={{ color: "#E97D71" }}>ONE INCREDIBLY FRESH IDEA.</span>   
      </h2>
      <div className="background1">
      <h2 className="homescreen__title">
    An entirely new, revolutionary snack — made of fruit.
      </h2>
      </div>
      <div className="background2">
      <h2 className="homescreen__title">
    Try one of each, or  indulge with your favourite.
      </h2>
      </div>
      <h2 className="homescreen__title">
    Bestsellers.
      </h2>
      <div className="homescreen__products">
      <Product />
      </div>
    </div>
  </>
)}

export default HomeScreen
