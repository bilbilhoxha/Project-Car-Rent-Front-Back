import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListProductComponent from './components/AdminPanel/ListProductComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateProductComponent from './components/AdminPanel/CreateProductComponent';
import UpdateProductComponent from './components/AdminPanel/UpdateProductComponent';
import ViewProductComponent from './components/AdminPanel/ViewProductComponent';
import HomeProductComponent from './components/Pages/HomeProductComponent';
import CartProductComponent from './components/Pages/CartProductComponent';
import ShopProductComponent from './components/Pages/ShopProductComponent';
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={HomeProductComponent} />
            <Route path="/shop"  component={ShopProductComponent} />
            <Route path="/cart" component={CartProductComponent}></Route>
            <Route path="/products" component={ListProductComponent}></Route>
            <Route path="/add-product/:id" component={CreateProductComponent}></Route>
            <Route path="/view-product/:id" component={ViewProductComponent}></Route>
            <Route path="/update-product/:id" component={UpdateProductComponent}></Route>
          </Switch>
        </div>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
