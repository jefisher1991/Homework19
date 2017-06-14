
var React = require("react");


var search = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">search</h3>
        </div>
        <div className="panel-body text-center">

          <h1>{this.props.title}</h1>

        </div>
      </div>
    );
  }
});

module.exports = search;
