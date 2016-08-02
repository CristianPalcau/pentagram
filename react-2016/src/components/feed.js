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
                // ['https://unsplash.it/400/400/?random', ['com1', 'com2', 'com3'], 10],
                // ['https://unsplash.it/400/400/?gravity=center', ['com1', 'com2'], 5],
                // ['https://unsplash.it/400/400/?gravity=east', [], 8],
                // ['https://unsplash.it/400/400/?gravity=east', [], 8]
            ]
        };

    }
    , componentWillMount: function () {
        var self = this;
        $.ajax({
            url: 'http://127.0.0.1:8000/api/v1/photos/',
            headers: {
                "Authorization": sessionStorage.authToken
            }
            , type: 'GET'
            , error: function (xhr, textStatus, errorThrown) {

            }
        }).then(function (data) {
            self.setState({images: data});
        });
    }
    , onCommentHandler: function (event) {
        var photoID = event.target.dataset.id;
        Router.HashLocation.push('photo/' + photoID);
        // console.log('Comment button was pressed!');
    }
    , render: function () {
        var self = this;
        return (
            <div>
                <Header />
                <div className="containerfeed">
                    {self.state.images.map(function (item) {
                        return (
                            <div className="containerpost col-md-6 image-frame" key ={item.id} >
                                <header className="headpost">
                                    <div className="utilizatorfeed">
                                        <a class="utilizator" title="utilizator" href="#/utilizator/">Utilizator</a>
                                    </div>
                                </header>

                                <a href ={'#/photo/' + item.id}>
                                <img src={'http://127.0.0.1:8000' + item.photo} id={'image-' + item.id} data-id={item.id} width="100%" height="100%"/>
                                </a>
                                <div className="footer-toolbar-image"></div>
                                <div className="subcontainer">
                                    <div className="all-icons">
                                        <div className="comment-icon glyphicon glyphicon-comment"></div>
                                        <div className="like-icon glyphicon glyphicon-thumbs-up">{item[2]}</div>
                                    </div>
                                    <div className="comment-panel">

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