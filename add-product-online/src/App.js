import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListProductComponent from './components/ListProductComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateProductComponent from './components/CreateProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import ViewProductComponent from './components/ViewProductComponent';
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListProductComponent}></Route>
            <Route path="/products" component={ListProductComponent}></Route>
            <Route path="/add-product/:id" component={CreateProductComponent}></Route>
            <Route path="/view-product/:id" component={ViewProductComponent}></Route>
            <Route path="/update-product/:id" component={UpdateProductComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
