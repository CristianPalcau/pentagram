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
            images: [],
            comments: []
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
    },
    onCommentHandler: function (event) {
        this.setState({comment: event.target.value});
    },
    onLikeHandler: function (event) {
        console.log('Like/Unlike button was pressed!');
        var token = sessionStorage.getItem("authToken");
        var photoId = event.target.dataset.id;
        $.ajax({
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Token ' + token);
            },
            url: 'http://127.0.0.1:8000/api/v1/photos/' + photoId + '/like/'
            , type: 'POST'
        });

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
    },
    onCommentSubmitHandler: function (event) {
        event.preventDefault();
        if (this.state.comment == null) {
            alert('Comment is empty!');
        } else {
            var token = sessionStorage.getItem("authToken");
            var photoId = event.target.dataset.id;
            var params = {comment: this.state.comment, user: sessionStorage.getItem("id")};
            console.log(params);
            console.log(this.state);

            $.ajax({
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Token ' + token);
                },
                url: 'http://127.0.0.1:8000/api/v1/photos/' + photoId + '/comments/'
                , type: 'POST'
                , data: this.state
            }).then(function (data) {
                window.location.reload();
            });
        }
    }
    , showComments: function (event) {
        var photoId = event.target.dataset.id;
        var self = this;
        $.ajax({
            url: 'http://127.0.0.1:8000/api/v1/photos/' + photoId + '/comments/'
            , type: 'GET'
            , error: function (xhr, textStatus, errorThrown) {
            }
        }).then(function (commentData) {
            self.setState({comments: commentData});
        });
        this.setState({
            fetchComments: true
        });
    }

    , componentDidMount: function(){
    },
    add: function(event){
        if (event.keyCode === 13) {
            {
                this.showComments();
            }

        }
     }
    , render: function () {
        var self = this;
        var likeHandle = this.onLikeHandler;
        var commentHandle = this.onCommentHandler;
        var commentSubmitHandle = this.onCommentSubmitHandler;
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
                                        <a className="utilizator" title="utilizator" href="#/utilizator/">Utilizator</a>
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
                                        <li className="comments"><h1><a className="user_comment notranslate" title="cristian" href="/cristian/">cristian</a><span>Descriere. Testare. Coming soon...</span>
                                        <li class="comments" ><button onClick={self.showComments} data-id={item.id}>Show comments</button></li>
                                        </h1></li>
                                        {self.state.comments.map(function (commItem) {
                                                        return (

                                                            <li className="comments"><h1><a className="user_comment notranslate" title = {commItem.user}>{commItem.user}</a>
                                                                <span>{commItem.comment}</span>
                                                            </h1></li>
                                                        );
                                        })}
                                    </ul>
                                        <section className="comments-post">
                                            <a className="like" role="button" aria-disabled="false"><span className="likes coreSpriteHeartOpen" onClick={self.likebutton}>Like</span></a>
                                            <form className="add-comment">
                                                <input type="text" className="comment-input" aria-label="Add a comment…" placeholder="Add a comment…" data-id={item.id} inputChangeHandler={commentHandle} onKeyDown={self.add}></input>
                                            </form>
                                        </section>
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