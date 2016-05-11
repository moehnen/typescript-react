import * as React from 'react'
import * as ReactDOM from 'react-dom'

var HelloList = React.createClass({
    render: function () {
        var items = this.props.data.map(item => (
            <div>
                {item.text}
            </div>
        ));

        return (
            <div>
                {items}
            </div>
        );
    }
});

export { HelloList };