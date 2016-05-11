import * as React from 'react'
import * as ReactDOM from 'react-dom'

var HelloComponent = React.createClass({
  render: function() {
    return (
      <strong>
       WORLD
      </strong>
    );
  }
});

export { HelloComponent };