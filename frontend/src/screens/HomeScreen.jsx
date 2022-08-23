import './HomeScreen.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// Components
import Footer from '../components/Footer'
import HomeScreenHeader from '../components/HomeScreenHeader'
import Product from '../components/Product'
import Slider from '../components/Slider'
// Actions
import { getProducts as listProducts } from '../redux/actions/productActions'


const HomeScreen = () => {

  const dispatch = useDispatch()
  const getProducts = useSelector(state => state.getProducts)
  const { products, loading, error } = getProducts

  useEffect(() => {
    dispatch(listProducts())
  } , [dispatch])

  return (
    <>
      <div className="homescreen">
        <HomeScreenHeader />
      <h2 className="homescreen__title">
      ONE INGREDIENT.
      <span>
        ONE INCREDIBLY FRESH IDEA.
        </span>   
      </h2>
      <div className="background1">
      <h2 className="homescreen__title">
    An entirely new snack — made of fruit.
      </h2>
      </div>
      <div className="background2">
      <h2 className="homescreen__title">
    Try one of each, or  indulge with your favourite.
      </h2>
      </div>
      <Slider />
      <h2 className="homescreen__title">
    Bestsellers.
      </h2>
      <div className="homescreen__products">
        {loading ? <div>Loading...</div> : error ? <div>{error}</div> : products.map(product => <Product key={product._id} product={product} />)}
      </div>
      <h2 className="homescreen__title">
    Snack better.
      </h2>
      <h2 className='flicker'>We’re taking snack-time back to
      it's roots with <span>perfectly ripe fruit</span> bursting with flavor.</h2>
      <Footer />
    </div>
  </>
)}

export default HomeScreen
