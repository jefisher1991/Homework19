// Include React
var React = require('react');

// Component creation
var Form = React.createClass({

  getInitialState: function(){
    return {
      topic: "",
      startYear: "",
      endYear: ""
    }
  },

  // This function will respond to the user input
  handleChange: function(event){

      // Here we create syntax to capture any change in text to the query terms (pre-search).
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);

  },

  // When a user submits...
  handleClick: function(){

    // Set the parent to have the search term
    this.props.setTerm(this.state.topic, this.state.startYear, this.state.endYear);

  },

  // Here we render the function
  render: function(){

    return(

      <div className="panel panel-primary">
        <div className="panel-heading">
          <h2 className="panel-title text-center">SEARCH</h2>
        </div>
        <div className="panel-body text-center">
            <form>
              <div className="form-group">
                <h5 className="">TOPIC</h5>
                <input type="text" className="form-control text-center" id="topic" onChange= {this.handleChange} required/>
              </div>
              <div className="form-group">
                <h5 className="">Start Year</h5>
                <input type="text" className="form-control text-center" id="startYear" onChange= {this.handleChange} required/>
              </div>
              <div className="form-group">
                <h5 className="">End Year</h5>
                <input type="text" className="form-control text-center" id="endYear" onChange= {this.handleChange} required/>
              </div>
              <button type="button" className="btn btn-primary" onClick={this.handleClick}>Search Articles</button>

            </form>
        </div>
      </div>
    )
  }
});

// Export the component back for use in other files
module.exports = Form;
