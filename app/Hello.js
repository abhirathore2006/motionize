"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        _super.apply(this, arguments);
    }
    Hello.prototype.render = function () {
        var results = [];
        for (var i = 0; i < 2; i++) {
            results.push(React.createElement("div", {key: i}, i));
        }
        return results;
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=Hello.js.map