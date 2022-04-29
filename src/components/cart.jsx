import React, { Component } from 'react';
import Item from './item';

class Cart extends Component {
  state = {
    items: [
      {
        id: 1,
        name: 'Apples',
        count: 1,
      },
      {
        id: 2,
        name: 'Oranges',
        count: 0,
      },
    ],
  };

  addItem(name) {
    const items = [...this.state.items];

    const last = items.reduce((prev, current) => {
      return prev.y > current.y ? prev : current;
    });

    items.push({
      id: last.id + 1,
      name: name,
      count: 1,
    });
    this.setState({ items });
  }

  handleIncrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index].count++;
    this.setState({ items });
  };

  handleRemove = (id) => {
    this.setState({ items: this.state.items.filter((a) => a.id !== id) });
  };

  render() {
    return (
      <div>
        {this.state.items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onRemove={this.handleRemove}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
