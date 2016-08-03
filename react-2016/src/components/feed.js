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

    , likebutton: function(event) {
        $('.like').click(function () {
            var obj = $(this);
            if (obj.data('liked')) {
                obj.data('liked', false);
                obj.html('<span class="likes coreSpriteHeartOpen">Like</span>');

            }
            else {
                obj.data('liked', true);
                obj.html('<span class="likes coreSpriteHeartFull">Unlike</span>');
            }
        });
    }
    , render: function () {
        var self = this;
        var tokenNumber = sessionStorage.getItem("authToken");
        if (!tokenNumber) {
            Router.HashLocation.push("login");
        }
        return (
            <div>
                <Header />
                <div className="containerfeed">
                    {self.state.images.map(function (item) {
                        return (
                            <div className="containerpost col-md-6 image-frame" key={item.id}>
                                <header className="headpost">
                                    <div className="utilizatorfeed">
                                        <a class="utilizator" title="utilizator" href="#/utilizator/">Utilizator</a>
                                    </div>
                                </header>

                                <a href={'#/photo/' + item.id}>
                                    <img src={'http://127.0.0.1:8000' + item.photo} id={'image-' + item.id}
                                         data-id={item.id} width="100%" height="100%"/>
                                </a>
                                <div className="container-footer-post">
                                    <section className="container-like">
                                            <span className="like">
                                            <span>{item[2]} 491 </span>likes</span>
                                    </section>
                                    <ul className="container-comments">
                                        <li className="comments"><h1><a className="user_comment notranslate"
                                                                        title="cristian"
                                                                        href="/cristian/">cristian</a><span>Descriere. Testare. Coming soon...</span>
                                        </h1></li>
                                        <section className="comments-post">
                                            <a className="like" role="button" aria-disabled="false"><span className="likes coreSpriteHeartOpen" onClick={self.likebutton}>Like</span></a>
                                            <form className="add-comment">
                                                <input type="text" className="comment-input" aria-label="Add a comment…" placeholder="Add a comment…"></input>
                                            </form>
                                        </section>
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
});
module.exports = feed;