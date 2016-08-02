/**
 * Created by Cristian Palcau on 25.07.2016.
 */
"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var registerForm = React.createClass({


        getInitialState: function() {
          return {
            username: null
            , email: null
            , password: null
          };
        }
        , userChangeHandler: function(event) {
            this.setState({username: event.target.value});
        }
        , emailChangeHandler: function(event) {
            this.setState({email: event.target.value});
        }

        , passwordChangeHandler: function(event) {
            this.setState({password: event.target.value});
        }

        , formSubmitHandler: function(event) {
            event.preventDefault();
            console.log(this.state);
            if (this.state.value.length.username > 2) {
              return 'success';
            } else if (this.state.email == null) {
              return 'error';
            } else if (this.state.password == null) {
              return 'error';
            } else if (this.state.password === this.state.passwordValid) {
            $.ajax({
                url: 'http://127.0.0.1:8000/api/v1/users/'
                , type: 'POST'
                , data: this.state
            }).then(function(data) {
                sessionStorage.setItem('authToken', data.token);
                Router.HashLocation.push('homePage');
                //redirect to homepage
            });
        }
        }
        , render: function(){
            return (
                <div className="containerlogin">
				<form id ="FormRegister">
                    <fieldset>
                    <div className="col-md-6 col-md-offset-3 loginpage">
                    <img src={'images/telefon_login.png'} alt="login_telefon" className="img-responsive loginimage"/>
                    <div className="logintable col-md-6">
                    <div className="jumbotron jumbologin">
                    <img src={'images/logo.png'} alt="logo" className="img-responsive formimage"/>
                    <h2>Sign up to see photos and videos from your friends.</h2>
					<input type="text" id="username" name="username" placeholder="Username" onChange={this.userChangeHandler} />
					<br />
                    <input type="email" name="email" placeholder="Email" onChange={this.emailChangeHandler} />
					<br />
					<input type="password" name="password" placeholder="Password" onChange={this.passwordChangeHandler} />
					<br />
					<button name="submit" onClick= {this.formSubmitHandler}>Register</button>
                    </div>
                    <div className="jumbotron jumbologin">
                    <h4>Have an account? <Link to = "login">Log in</Link></h4></div>
                    </div>
                    </div>
                    </fieldset>
				</form>
                </div>
            );
        }

});

module.exports = registerForm;

