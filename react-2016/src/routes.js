"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/loginPage')} />
    <Route name="about" handler={require('./components/about/aboutPage')} />
    <Route name="register" handler={require('./components/registerForm')} />
    <Route name="login" handler={require('./components/loginForm')} />
    <Route name="feed" handler={require('./components/feed')} />
    <NotFoundRoute handler={require('./components/notFoundPage')} />
    // do the redirect if route fails
    <Redirect from="about-us" to="about" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;