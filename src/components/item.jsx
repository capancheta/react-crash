import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div>
        <span className='m-2'>{this.props.item.name}</span>
        <span className={this.getBadgeClassNames()}>{this.displayCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.item)}
          className='bth m-2 btn-primary btn-sm'
        >
          +
        </button>
        <button
          onClick={() => this.props.onRemove(this.props.item.id)}
          className='bth m-2 btn-secondary btn-sm'
        >
          -
        </button>
      </div>
    );
  }

  getBadgeClassNames() {
    const className = 'badge m-2 badge-';
    return `${className}${this.props.item.count === 0 ? 'warning' : 'primary'}`;
  }

  displayCount() {
    const { count } = this.props.item;
    return count === 0 ? 'Zero' : count;
  }
}

export default Item;
