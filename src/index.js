import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <h1 className='wrapper__title'>Hello, World</h1>
        <p className='wrapper__text'>This is a one thing</p>
        <button onClick={this.handleClick}>Click me</button>
        <p className='wrapper__info'>I have been toogled {this.state.count} times</p>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Block />
    <Block />
  </React.StrictMode>
);

