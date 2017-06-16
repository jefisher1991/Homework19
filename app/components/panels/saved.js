
var React = require("react");

var Saved = React.createClass({

getInitialState: function(){

  return {
    articles: []
  }
},
remove: function(result){
  this.props.deleteArticle(result);
},  
  getProps: function(prop){
  var that = this;

    var ourResults = prop.articles.map(function(search,x){
      var click = that.clickToDelete.bind(that, search);
      return <div className="list-group-item" key={i}>
      <a href={search.web_url} target="_blank">{search.headline.main}</a>
      <span>{search.pub_date}</span>
      <button className="btn btn-warning" onClick={click}>Remove</button></div> 
    });

    this.setState({articles: ourResults});

  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Saved</h3>
        </div>
        <div className="panel-body text-center">

          {this.state.articles}

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
