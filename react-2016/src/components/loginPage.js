"use strict";

var React = require('react');
var Router = require('react-router');
var LoginForm = require('./loginForm');
var RegisterForm = require('./registerForm');
var Link = Router.Link;

var loginPage = React.createClass({
	render: function() {
        return (
                <LoginForm/>
		);
	}
});

module.exports = loginPage;