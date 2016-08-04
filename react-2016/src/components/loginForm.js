/**
 * Created by Cristian Palcau on 22.07.2016.
 */

"use strict";
var React = require('react');
var Router = require('react-router');
var RegisterForm = require('./registerForm');
var Link = Router.Link;
var Input = require('./common/textInput');

var loginForm = React.createClass({
    getInitialState: function() {
          return {
            username: null
            , password: null
          };
        }
        , userChangeHandler: function(event) {
            this.setState({username: event.target.value});
        }

        , passwordChangeHandler: function(event) {
            this.setState({password: event.target.value});
        }

        , formSubmitHandler: function(event) {
            event.preventDefault();
            console.log(this.state);
            $.ajax({
                url: 'http://127.0.0.1:8000/api/v1/login/'
                , type: 'POST'
                , data: this.state
                , error: function (xhr, textStatus, errorThrown) {
                    var json = JSON.parse(xhr.responseText);
                    for(var prop in json) {
                        alert(prop + "  " + json[prop]);
                    }
                }
            }).then(function(data) {
                sessionStorage.setItem('authToken', data.token);
                Router.HashLocation.push("feed");
              });
        }
        , render: function(){
            return (
                <main className="mainclass" role="main">
                    <article className="container_main">
                    <div className="containerlogin">
                        <form>
                            <fieldset>
                                    <img src={'images/telefon_login.png'} alt="login_telefon"
                                         className="loginimage formimage_display"/>
                                    <div className="logintable">
                                        <div className="jumbotron jumbologin">
                                            <img src={'images/logo.png'} alt="logo"
                                                 className="img-responsive formimage"/>
                                            <input type="text" placeholder="Username"
                                                   onChange={this.userChangeHandler}/><br />
                                            <input type="password" placeholder="Password"
                                                   onChange={this.passwordChangeHandler}/><br />
                                            <button name="submit" onClick={this.formSubmitHandler}> Login</button>
                                        </div>
                                        <div className="jumbotron jumbologin">
                                            <h4>Don't have an account? <Link to="register">Sign up</Link></h4></div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    </article>
                </main>
            );
        }

});

module.exports = loginForm;

