var axios = require('axios');
var React = require('react');

var Form = require('./panels/Form');
var Results = require('./panels/Results');
var Saved = require('./panels/Saved');


var helpers = require('./data.js');
// This is the main component.
var Main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			topic: "",
			startYear: "",
			endYear: "",
			results: [],
			articles: []
		}
	},

	// We use this function to allow panels to update the parent with searchTerms.
	setTerm: function(tpc, stYr, endYr){
		this.setState({
			topic: tpc,
			startYear: stYr,
			endYear: endYr
		})
	},

	saveArticle: function(title, date, url){
		axios.post('/api/saved', {title: title, date: date, url: url})
		.then(function(response){
			console.log("SAVED IN MONGO.");
			return(response);
		})
		this.getArticle();
	},

	deleteArticle: function(article){
		axios.delete('/api/saved/' + article._id)
			.then(function(response){
				this.setState({
					articles: response.data
				});
				return response;
			}.bind(this));
		this.getArticle();
	},

	getArticle: function(){
		axios.get('/api/saved')
			.then(function(response){
				this.setState({
					articles: response.data
				});
			}.bind(this));
	},

	// If the component updates we'll run this code
	componentDidUpdate: function(previousProperties, previousState){
		if(previousState.topic != this.state.topic){
			helpers.query(this.state.topic, this.state.startYear, this.state.endYear)
				.then(function(data){
					console.log(data);
					if (data != this.state.results)
					{
						this.setState({
							results: data
						})
					}
				}.bind(this))
		}
	},

	componentDidMount: function(){
		axios.get('/api/saved')
			.then(function(response){
				this.setState({
					articles: response.data
				});
			}.bind(this));
	},

	// Here we render the function
	render: function(){
		return(

			<div className="container">

					<h1 className="text-center"> NYT SEARCH APP </h1>
				<div className="row">
					<Form setTerm={this.setTerm}/>
				</div>

				<div className="row">
					<Results results={this.state.results} saveArticle={this.saveArticle}/>
				</div>

				<div className="row">
					<Saved articles={this.state.articles} deleteArticle={this.deleteArticle} />
				</div>

			</div>
		)
	}
});

module.exports = Main;
