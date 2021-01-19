import { Component } from 'react';
import { compose } from 'redux';
import './App.css';
import Header from './Components/Header/header';
import Container from './Components/Container/container';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: {},
    }
  }

  updateUser = (user) => {
    this.setState({ user })
  }


  render() {
    const { user } = this.state;
    return (
      <div className="App" >
        <Header user={user} updateUser={this.updateUser} />
        <h1> Hello World!</h1>
        <Container />
      </div >
    );
  }
}

export default App;
