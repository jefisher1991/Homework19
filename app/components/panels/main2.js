
var React = require("react");


var main2 = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Main2</h3>
        </div>
        <div className="panel-body text-center">

          <h1>{this.props.title}</h1>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = main2;
