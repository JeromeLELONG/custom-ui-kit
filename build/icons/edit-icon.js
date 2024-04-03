'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditIcon = exports.EditIcon = function EditIcon(props) {
    return _react2.default.createElement(
        'svg',
        _extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, props),
        _react2.default.createElement('path', { d: 'M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z' })
    );
};

EditIcon.defaultProps = {
    height: 16,
    width: 16,
    fill: _theme.theme.colors.warmGrey8c
};

EditIcon.displayName = 'EditIcon';