
var React = require("react");


var Form = React.createClass({
  getInitialState: function() {
    return {
      topic: "",
      startYear: "",
      endYear:""
    }
  },
  change: function (e) {
    var state = {}; 

    state[e.target.id] = e.target.value;
    this.setState(state);
  },
  onClick: function () {
  this.props.setTerm(this.state.topic, this.state.startYear, this.state.endYear); 
  },

  render: function() { 
   return (

      <div className="panel panel-default"> 
        <div className="panel-heading">
          <h3 className="panel-title">Results</h3>
        </div>
        <div className="panel-body text-center">

         <form>
          <div className= "form-group">
            <h5>Search a Topic </h5>
            <input type="text" className= "form-control" id= "topic" onChange= {this.change} required />

            <h5>Start Year </h5>
            <input type="text" className= "form-control" id= "startYear" onChange= {this.change} required />

            <h5>End Year</h5>
            <input type="text" className= "form-control" id= "endYear" onChange= {this.change} required />
            <button className = "btn btn-primary" onClick= {this.onClick}>Search</button>

          </div>


        
          </form>

        </div>
      </div>

    );
  }
});

module.exports = Form;
