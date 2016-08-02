/**
 * Created by Cristian Palcau on 28.07.2016.
 */
"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Header = require('./common/Header');

var feed = React.createClass({
    getInitialState: function () {
        return {
            images: [
                ['https://unsplash.it/400/400/?random', ['com1', 'com2', 'com3'], 10],
                ['https://unsplash.it/400/400/?gravity=center', ['com1', 'com2'], 5],
                ['https://unsplash.it/400/400/?gravity=east', [], 8],
                ['https://unsplash.it/400/400/?gravity=east', [], 8]
            ]
        };

    }
    , onCommentHandler: function (event) {
        console.log('Comment button was pressed!');
    }
    , render: function () {
        return (
            <div>
                <Header />
                <div className="containerfeed">
                    {this.state.images.map(function (item, index) {
                        return (
                            <div className="containerpost col-md-6 image-frame">
                                <header className="headpost">
                                    <div className="utilizatorfeed">
                                        <a class="utilizator" title="utilizator" href="#/utilizator/">Utilizator</a>
                                    </div>
                                </header>
                                <img src={item[0]} id={'image-' + index} width="100%" height="100%"/>
                                <div className="footer-toolbar-image"></div>
                                <div className="subcontainer">
                                    <div className="all-icons">
                                        <div className="comment-icon glyphicon glyphicon-comment"></div>
                                        <div className="like-icon glyphicon glyphicon-thumbs-up">{item[2]}</div>
                                    </div>
                                    <div className="comment-panel">
                                        {item[1].map(function (comment, indexCom) {
                                            return (
                                                <div id={'comment-' + index + '-' + indexCom}>{comment}</div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <button type="button" className="btn btn-primary btn-lg round-btn">+</button>
                </div>
            </div>
        );
    }
});
module.exports = feed;