'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    padding: ', ';\n    display: inline-block;\n    background-color: ', ';\n    &.selected: {\n        border-bottom: ', ' 4px solid;\n    }\n    text-decoration: none;\n    color: ', ';\n    text-transform: uppercase;\n'], ['\n    padding: ', ';\n    display: inline-block;\n    background-color: ', ';\n    &.selected: {\n        border-bottom: ', ' 4px solid;\n    }\n    text-decoration: none;\n    color: ', ';\n    text-transform: uppercase;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = require('react-router-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Link = (0, _styledComponents2.default)(_reactRouterDom.NavLink)(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.s;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.lightBlue;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.red;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.black;
});

var activeStyle = {
    borderBottom: _theme.theme.colors.red + ' 4px solid'
};

var NavItem = function NavItem(_ref5) {
    var to = _ref5.to,
        children = _ref5.children,
        exact = _ref5.exact,
        props = _objectWithoutProperties(_ref5, ['to', 'children', 'exact']);

    return _react2.default.createElement(
        Link,
        _extends({ exact: exact, to: to, activeStyle: activeStyle }, props),
        children
    );
};

exports.NavItem = NavItem;
NavItem.defaultProps = {
    exact: true
};

NavItem.propTypes = {
    to: _reactRouterDom.NavLink.propTypes.to,
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
    exact: _reactRouterDom.NavLink.propTypes.exact
};