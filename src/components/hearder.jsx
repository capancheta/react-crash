import React, { Component } from 'react';

class Header extends Component {
  state = {
    name: '',
  };

  onChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  submit = () => {
    this.props.onAddItem(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          type='text'
          onChange={(event) => this.onChange(event)}
        ></input>
        <button
          onClick={() => {
            this.submit();
          }}
          className='bth m-2 btn-primary btn-sm'
        >
          Add
        </button>
      </div>
    );
  }
}

export default Header;
