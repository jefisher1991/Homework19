
var axios = require("axios"); 
var React = require("react"); 

var Form = require("./panels/form"); 
var Results = require("./panels/results"); 
var Saved = require("./panels/saved"); 

var helpers = require("./data.js");

// Import all of the sub components here

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

	getInitialState: function(){
		return {
			topic: "",
			startYear: "",
			endYear: "",
			results: [],
			articles: []
		}
	},	
	setTerm: function(topic, startYear, endYear){
		this.setState({
			topic: topic, startYear: startYear, endYear:endYear
		})

	}, 

	updateComponent: function(previousProperty, previousState){
		if (previousState.topic !== this.state.topic) {
			helpers.query(this.state.topic, this.state.startYear, this.state.endYear).then(function(response){
				if (response !== this.state.results){
					this.setState({
						results:response  
					})
				}
			}.bind(this))
		}
	},
	mountComponent: function(){
		axios.get('/api/saved')
			.then(function(response){
				this.setState({
					articles: response.data
				});
			}.bind(this));
	},

	saveArticle: function(title, date, url){
			helpers.saveArticle(title, date, url); 
	},
	deleteArticle: function(article){
			axios.delete("/api/saved/" + article._id).then(function(response){
				this.setState({
					articles:response.data
				})
				return response; 
			}.bind(this)); 		

	},
	getArticle: function(){
		axios.get("/api/saved/").then(function(response){
			this.setState({
					articles: response.data
			})
			return response;
		}.bind(this)); 
	}, 
	render: function(){

		return (
		<div className="container"> 
			<div className="row">

				<h1> New York Times Search App</h1>

			</div>
			<div className="row">
				<Form setTerm={this.setTerm}/>

			</div>
			<div className="row">
				<Results results={this.state.results} saveArticle={this.saveArticle}/>

			</div>
			<div className="row">
				<Saved articles= {this.state.articles} deleteArticle= {this.deleteArticle}/>

			</div>

			}
		</div>


		)
	}



 });

module.exports = Main;

//   // Here we set a generic state associated with the number of clicks
//   getInitialState: function() {
//     return {
//       clicks: 0
//     };
//   },

//   // Whenever the button is clicked we'll use setState to add to the clickCounter
//   // Note the syntax for setting the state
//   handleClick: function() {
//     this.setState({ clicks: 1 + this.state.clicks });
//   },

//   // Here we describe this component's render method
//   render: function() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="jumbotron">
//             <h1>Hey you! Click this button!</h1>
//             <p>I do crazy things.</p>
//             <p>
//               {
 
//               /*
//                 Here we create a button click.
//                 Note how we have an onClick event associated with our handleClick function.
//                 this.handleClick references the handleClick function defined above our render function
//               */}
//               <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
//             </p>
//           </div>

//           {/*
//             Below we add each of the sub components.
//             Note how we "pass" in the click count as a prop called "clicks" to each sub component
//           */}


//           <div className="col-md-3">
//               <Adder
//                 clicks= {this.state.clicks}/>
//             {/* Add code to render the Adder component here */}

//           </div>

//           <div className="col-md-3">
//             <Multiplier
//               clicks = {this.state.clicks * 4}
//             />
//             {/* Add code to render the Multiplier component here */}

//           </div>


//           <div className="col-md-3">
//             <Randomizer
//               clicks= {this.state.clicks * Math.floor((Math.random() * 10) + 1)}/>
//             {/* Add code to render the Randomizer component here */}

//           </div>

//           <div className="col-md-3">
//             <Imgr/>
//              {/* Add code to render the Imgr component here */}

//           </div>

//         </div>

//       </div>
//     );
//   }
// });

// Export the component back for use in other files

