import { Route, Switch } from 'react-router-dom';
import './App.css';
import "./fonts/Hind-Regular.ttf"
import Footer from './components/footer';
import Header from './components/header';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import ContactUsPage from './pages/ContactUsPage';
import DeliveryPage from './pages/DeliveryPage';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SignleProductItemPage from './pages/SingleProductItemPage';
import WishlistPage from './pages/WishlistPage';
import ShoppingCartPage from "./pages/ShoppingCartPage";
import TestPage from './pages/TestPage';
import ProductListPage from './pages/ProductListPage';
import OrderPage from './pages/OrderPage';
import BlogPageOne from './pages/BlogPage/blog-page-one';
import BlogPageTwo from './pages/BlogPage/blog-page-two';
import BlogPageThree from './pages/BlogPage/blog-page-three';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* <Route exact path='/test' component={TestPage} /> */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/honeys' component={ProductListPage}/>
        <Route exact path='/honeys/:id' component={SignleProductItemPage} />
        <Route exact path='/about-us' component={AboutUsPage} />
        <Route exact path='/blog' component={BlogPage} />
        <Route exact path='/blog/blog-page-one' component={BlogPageOne} />
        <Route exact path='/blog/blog-page-two' component={BlogPageTwo} />
        <Route exact path='/blog/blog-page-three' component={BlogPageThree} />
        <Route exact path='/delivery' component={DeliveryPage} />
        <Route exact path='/wishlist' component={WishlistPage} />
        <Route exact path='/shopping-cart' component={ShoppingCartPage} />
        <Route exact path='/contact-us' component={ContactUsPage} />
        <Route exact path='/sign-in' component={SignInPage} />
        <Route exact path='/sign-up' component={SignUpPage} />
        <Route exact path='/checkout' component={OrderPage} />
      </Switch>

      <Footer/>
    
      {/* // все данные с бэка */}
    </div>
  );
}

export default App;
