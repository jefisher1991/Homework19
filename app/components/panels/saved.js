
var React = require("react");


var saved = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">saved</h3>
        </div>
        <div className="panel-body text-center">

          <h1>{this.props.title}</h1>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = saved;
