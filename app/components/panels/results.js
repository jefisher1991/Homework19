
var React = require("react");


var Results = React.createClass({
  getInitialState: function() {
    return {
      topic: "",
      startYear: "",
      endYear:"",
      results: []

    }
  },
  save: function(result) {
    this.props.saveArticle (result.headline.main, result.pub_date, result.web_url);
  },

  getProps: function(prop){
    var that = this;

    var ourResults = prop.results.map(function(search,x){
      var click = that.clickToSave.bind(that, search);
      return <div className="list-group-item" key={i}>
      <a href={search.web_url} target="_blank">{search.headline.main}</a>
      <span>{search.pub_date}</span>
      <button className="btn btn-warning" onClick={click}>Save</button></div> 
    });

    this.setState({results: ourResults});

  },



  render: function() { 
   return (

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Results</h3>
        </div>
        <div className="panel-body text-center">

          <h1>{this.state.results}</h1>

        </div>
      </div>
    );
  }
});

module.exports = Results;
