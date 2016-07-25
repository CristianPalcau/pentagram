/**
 * Created by Cristian Palcau on 25.07.2016.
 */
"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var registerForm = React.createClass({
        render: function(){
            return (
				<form>
                    <div className="col-md-3 "></div>
                    <div className="col-md-3 ">
                    <img src={'images/telefon_login.png'} alt="login_telefon" className="img-responsive"/>
                    </div>
                    <div className="col-md-6 text-left loginform">
                    <img src={'images/logo.png'} alt="logo" className="img-responsive"/>
                    <h4>Sign up to see photos and videos from your friends.</h4>
					<label htmlFor="username"></label>
					<input type="text" placeholder="Username" />
					<br />
                    <input type="email" placeholder="Email" />
					<br />
					<input type="password" placeholder="Password" />
					<br />
					<input type="submit" value="Register"/>
                    <h4>Have an account? <Link to = "login">Log in</Link></h4>
                    </div>
				</form>
            );
        }

});

module.exports = registerForm;

