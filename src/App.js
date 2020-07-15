import React, {useState} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import Header from './components/Header'
import About from './pages/About'
import Beans from './pages/Beans'
import Footer from './components/Footer'

import './App.scss';

const App = () => {

  const [cartOpen, setCartOpen] = useState(false);
  const handleCart = (e) => {
      setCartOpen(!cartOpen)
  }
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Header cart={cart} setCart={setCart} cartOpen={cartOpen} handleCart={handleCart}/>
        <Switch>
          <Route path='/about' component={() => { return <About cartOpen={cartOpen} />}} />
          <Route path='/beans' component={() => { return <Beans cart={cart} setCart={setCart} cartOpen={cartOpen} handleCart={handleCart}/>}} />
          <Route path='/' component={() => {return <Redirect to='/about' />}} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
