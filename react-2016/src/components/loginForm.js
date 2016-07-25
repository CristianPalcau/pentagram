/**
 * Created by Cristian Palcau on 22.07.2016.
 */

"use strict";
var React = require('react');
var Router = require('react-router');
var RegisterForm = require('./registerForm');
var Link = Router.Link;

var loginForm = React.createClass({
        render: function(){
            return (
				<form>
                    <div className="col-md-3 "></div>
                    <div className="col-md-3 ">
                    <img src={'images/telefon_login.png'} alt="login_telefon" className="img-responsive"/>
                    </div>
                    <div className="col-md-6 text-left loginform">
                    <img src={'images/logo.png'} alt="logo" className="img-responsive"/>
					<input type="text" placeholder="Username"/>
					<br />
					<input type="password" placeholder="Password"/>
					<br />
					<input type="submit" value="Login"/>
                    <h4>Don't have an account? <Link to = "register">Sign up</Link> </h4>
                    </div>
				</form>



            );
        }

});

module.exports = loginForm;

