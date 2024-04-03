"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IncognitoIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Source: https://norbat.de/wp-content/uploads/2015/08/Google_Chrome_icon_regular_incognito.svg
var IncognitoIcon = exports.IncognitoIcon = function IncognitoIcon(props) {
    return _react2.default.createElement(
        "svg",
        _extends({
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 1000 1000",
            enableBackground: "new 0 0 1000 1000",
            xmlSpace: "preserve"
        }, props),
        _react2.default.createElement(
            "g",
            { id: "Logo-incognito" },
            _react2.default.createElement("circle", { cx: "500", cy: "500", r: "500", fill: "lightgrey" }),
            _react2.default.createElement("path", {
                fill: "#C9C9C9",
                d: "M983.076,618.693L867.5,503.117h-734l481.114,481.114C793.906,941.465,938.155,801.207,983.076,618.693z"
            }),
            _react2.default.createElement("path", {
                id: "Brille",
                d: "M646.004,522.457c-47.407,0-87.99,29.192-104.773,70.578c-11.16-2.439-26.678-5.329-37.691-5.352   c-0.057,0-0.111,0-0.168,0c-11.012,0-28.364,2.216-39.938,4.549c-16.981-40.957-57.332-69.775-104.43-69.775   c-62.42,0-113.021,50.602-113.021,113.021S296.584,748.5,359.004,748.5s113.021-50.602,113.021-113.021   c0-4.803-0.307-9.533-0.888-14.178c8.684-1.603,22.91-3.617,32.208-3.617c0.043,0,0.088,0,0.131,0   c7.691,0.016,20.169,2.269,30.295,4.444c-0.516,4.38-0.789,8.833-0.789,13.351c0,62.42,50.602,113.021,113.021,113.021   s113.021-50.602,113.021-113.021S708.424,522.457,646.004,522.457z M359.004,718.5c-45.778,0-83.021-37.243-83.021-83.021   s37.243-83.021,83.021-83.021c19.002,0,36.878,6.242,51.694,18.053c14.405,11.482,24.705,27.588,29.003,45.349   c1.542,6.376,2.325,12.977,2.325,19.62C442.025,681.257,404.782,718.5,359.004,718.5z M646.004,718.5   c-45.778,0-83.021-37.243-83.021-83.021s37.243-83.021,83.021-83.021s83.021,37.243,83.021,83.021S691.782,718.5,646.004,718.5z"
            }),
            _react2.default.createElement("path", {
                fill: "#999999",
                d: "M133.5,503.117h734c0,0-50.616-26.332-133.945-48.71L657.5,181.5c0,0-63.452-41-154.143-41l-0.854,283   C283.167,433.833,133.5,503.117,133.5,503.117z"
            }),
            _react2.default.createElement("path", {
                fill: "#FFFFFF",
                d: "M296.298,360h410.973l26.283,94.407c0,0-136.047-29.907-231.051-29.907S270.7,457.487,270.7,457.487   L296.298,360z"
            })
        )
    );
};

IncognitoIcon.defaultProps = {
    height: 16,
    width: 16
};

IncognitoIcon.displayName = 'IncognitoIcon';