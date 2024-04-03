'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabsNavBar = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: block;\n    background-color: ', ';\n'], ['\n    display: block;\n    background-color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents2.default.nav(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.colors.lightBlue;
});

var TabsNavBar = exports.TabsNavBar = function TabsNavBar(_ref2) {
    var children = _ref2.children;
    return _react2.default.createElement(
        Nav,
        null,
        children
    );
};

TabsNavBar.propTypes = {
    children: _propTypes2.default.arrayOf(_propTypes2.default.element.isRequired)
};