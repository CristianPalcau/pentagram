/**
 * Created by Cristian Palcau on 02.08.2016.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

//TODO:
//1. get user Name using user_id, to show on comments
//2. remember somewhere logged user to can add comments and likes.
//3. add submit button in header, style header, remove comments page

var feed = React.createClass({
	getInitialState: function(){
			return {
				imageLoaded: false,
				image: '',
				comments: [],
				likes: ''
			};
	}

	, componentWillMount: function() {
		var self = this;
		$.ajax({
			url: 'http://127.0.0.1:8000/api/v1/photos/'
			, type: 'GET'
			, error: function(xhr, textStatus, errorThrown) {

			}
		}).then(function(data) {
			function findPhoto(img) {
				return img.id === parseInt(self.props.params.photo_id);
			}
            self.setState({imageLoaded: true});
			self.setState({image: data.find(findPhoto)});

			$.ajax({
			url: 'http://127.0.0.1:8000/api/photos/' + self.state.image.id + '/comments/'
			, type: 'GET'
			, error: function(xhr, textStatus, errorThrown) {
			}
			}).then(function(commentData) {
				self.setState({comments: commentData});
			});

			$.ajax({
			url: 'http://127.0.0.1:8000/api/photos/' + self.state.image.id + '/likes/'
			, type: 'GET'
			, error: function(xhr, textStatus, errorThrown) {
			}
			}).then(function(likesData) {
				self.setState({likes: likesData});
			});
		});
	}

	, onCommentHandler: function(event) {
		event.persist();

		var id = event.target.id;

	}
	, render: function() {
		var self = this;
		//debugger;
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<img className="img-rounded photo-img" src={'http://127.0.0.1:8000' + self.state.image.photo} width="100%" />
					</div>
					<div className="col-md-7 well">
						<h1>Comments</h1>
						{self.state.comments.map(function (item) {
							return (
							<div >
								<h5><b>{item.user} said: </b><i>{item.comment}</i></h5>
							</div>
							);
						})}
						{self.state.comments.length === 0 ? <div>No comments</div> : ''}

					</div>
					<span className="like-icon glyphicon glyphicon-thumbs-up"></span><span className="like-label">{self.state.likes}</span>
				</div>

			</div>);
	}
});

module.exports = feed;