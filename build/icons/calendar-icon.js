'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalendarIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _theme = require('../theme');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CalendarIcon = exports.CalendarIcon = function CalendarIcon(props) {
    return React.createElement(
        'svg',
        _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, props),
        React.createElement('path', { d: 'M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z' })
    );
};

CalendarIcon.defaultProps = {
    width: 32,
    height: 32,
    fill: _theme.theme.colors.warmGrey8c
};

CalendarIcon.displayName = 'CalendarIcon';