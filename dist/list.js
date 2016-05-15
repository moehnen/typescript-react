"use strict";
var React = require('react');
exports.__hotReload = true;
exports.HelloList = function (_a) {
    var items = _a.items;
    return React.createElement("div", null, items.map(function (item) {
        return React.createElement("div", {key: item.id}, item.text);
    }));
};
//# sourceMappingURL=list.js.map