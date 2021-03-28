import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component{


    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.handleChange = this.handleSignIn.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
     
      handleSignIn(event) {
        this.setState({value: event.target.value});
      }
     
      handleSubmit(event) {
        alert('Name: ' + this.state.value);
        event.preventDefault();
      }
     
      render() {
        return (
         <div>
           <form onSubmit={this.handleSignIn.bind(this)}>
            <h3>Sign in</h3>
            <input type="text" ref="username" placeholder="enter your username" />
            <input type="password" ref="password" placeholder="enter password" />
            <Link to="/listing" className="btn btn-primary" >Login</Link>
          </form>
        </div>  
        );
      }
        
    }
  
  
  
  export default Login;