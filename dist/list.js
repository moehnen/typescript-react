"use strict";
var React = require('react');
var HelloList = React.createClass({
    render: function () {
        var items = this.props.data.map(function (item) {
            return React.createElement("div", null, item.text);
        });
        return (React.createElement("div", null, items));
    }
});
exports.HelloList = HelloList;
//# sourceMappingURL=list.js.map