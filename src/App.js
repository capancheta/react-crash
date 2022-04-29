import './App.css';
import React, { Component } from 'react';
import Header from './components/hearder';
import Cart from './components/cart';

class App extends Component {

  constructor(){
    super();
    this.cart = React.createRef()
  }

  addItem = (name) => {
    if (!name) return;
    this.cart.current.addItem(name)
  }

  render(){
    return (
      <div>
        <Header onAddItem={this.addItem}/>
        <Cart ref={this.cart}/>
      </div>

      );
    }

}
 
export default App;


