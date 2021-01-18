import { Component } from 'react';
import axios from 'axios';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: ''
    }
  }

  handleInput = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value })
  }

  register = () => {
    const { name, password } = this.state;
    axios
      .post('/auth/register', { name, password })
      .then(res => {
        this.setState({ name: '', password: '' })
        this.props.updateUser(res.data)
      })
      .catch(err => {
        this.setState({ name: '', password: '' })
        console.log(err)
      })
  }

  login = () => {
    const { name, password } = this.state;
    axios
      .post('/auth/login', { name, password })
      .then(res => {
        this.props.updateUser(res.data);
        this.setState({ name: '', password: '' });
      })
      .catch(err => {
        alert(err.response.request.response)
        console.log(err)
      })
  }

  logout = () => {
    axios
      .get('/auth/logout')
      .then(() => { this.props.updateUser({}) })
      .catch(err => console.log(err))
  }

  render() {
    const { user } = this.props;
    const { name, password } = this.state;
    return (
      <div>
        <h1>Gotta Catch Them All!</h1>
        <h3>{user.name}, welcome to the dragon's lair</h3>
        <input placeholder='name'
          type='text'
          name='name'
          onChange={this.handleInput}
          value={name} />
        <input placeholder='password'
          type='text'
          name='password'
          onChange={this.handleInput}
          value={password} />
        <button onClick={this.register}>Register</button>
        <button onClick={this.login}>Login</button>
        <button onClick={this.logout} >Logout</button>
      </div>
    )
  }

}

export default Header