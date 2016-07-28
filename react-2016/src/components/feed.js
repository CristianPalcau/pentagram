/**
 * Created by Cristian Palcau on 28.07.2016.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var feed = React.createClass({
	render: function() {
        return (
                <div className="jumbotron">
                    <h1>Fotografii</h1>
                </div>
		);
	}
});

module.exports = feed;