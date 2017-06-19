var React = require('react');

var Saved = React.createClass({

  getInitialState: function(){
    return {
      articles: []
    }
  },

  clickToDelete: function(result){
    this.props.deleteArticle(result);
  },

  componentWillReceiveProps: function(props){
    var that = this;
    var myResults = props.articles.map(function(search, i){
      var click = that.clickToDelete.bind(that, search);
      return <div className="list-group-item" key={i}><a href={search.url} target="_blank">{search.title}</a>{search.date}<button type="button" className="btn btn-danger" onClick={click}>Delete</button></div>
    });

    this.setState({articles: myResults});
  },

  render: function(){

    return(

      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body">
          {this.state.articles}
        </div>
      </div>

    )
  }
});


module.exports = Saved;
