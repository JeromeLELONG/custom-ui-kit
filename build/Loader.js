'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClipLoader = require('react-spinners/ClipLoader');

var _ClipLoader2 = _interopRequireDefault(_ClipLoader);

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = exports.Loader = function Loader(props) {
  return _react2.default.createElement(_ClipLoader2.default, _extends({ color: _theme.theme.active }, props));
};