"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    
	render: function() {
		return (
        <nav className="containerheader">
            <div className="headercontent">
              <a className="logofeed" href="#/feed">Pentagram</a>
              <div className="butoanenavigare">
                <a className="butonadd" href="#/feed">Add</a>
                <a className="butonprofil" href="#/profil">Profile</a>
              </div>
              </div>
        </nav>
		);
	}
});

module.exports = Header;
