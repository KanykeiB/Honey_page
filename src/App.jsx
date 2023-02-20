import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import ShoppingCart from './containers/shopping-cart';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import ContactUsPage from './pages/ContactUsPage';
import DeliveryPage from './pages/DeliveryPage';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SignleProductItemPage from './pages/SingleProductItemPage';
import WishlistPage from './pages/WishlistPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route exact path='/honeys/:id' component={SignleProductItemPage} />
        <Route exact path='/about-us' component={AboutUsPage} />
        <Route exact path='/blog' component={BlogPage} />
        <Route exact path='/delivery' component={DeliveryPage} />
        <Route exact path='/wishlist' component={WishlistPage} />
        <Route exact path='/shopping-cart' component={ShoppingCart} />
        <Route exact path='/contact-us' component={ContactUsPage} />
        <Route exact path='/sign-in' component={SignInPage} />
        <Route exact path='/sign-up' component={SignUpPage} />
      </Switch>
      <Footer/>
      {/* // все данные с бэка */}
    </div>
  );
}

export default App;
