'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Breadcrumb = exports.BreadcrumbContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n\n    & > * + *:before {\n        content: \'>\';\n        margin-left: ', ';\n        margin-right: ', ';\n    }\n'], ['\n    display: flex;\n\n    & > * + *:before {\n        content: \'>\';\n        margin-left: ', ';\n        margin-right: ', ';\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BreadcrumbContainer = exports.BreadcrumbContainer = _styledComponents2.default.div(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.s;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.s;
});

var Breadcrumb = exports.Breadcrumb = function Breadcrumb(_ref3) {
    var items = _ref3.items,
        lastItem = _ref3.lastItem,
        link = _ref3.link;
    return items.length > 1 ? _react2.default.createElement(
        BreadcrumbContainer,
        null,
        items.map(function (item, index) {
            var element = (index < items.length - 1 ? link : lastItem)(item);
            return _react2.default.cloneElement(element, { key: item.path });
        })
    ) : null;
};

Breadcrumb.propTypes = {
    link: _propTypes2.default.func.isRequired,
    lastItem: _propTypes2.default.func.isRequired,
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        path: _propTypes2.default.string.isRequired,
        label: _propTypes2.default.string.isRequired
    }))
};

Breadcrumb.displayName = 'Breadcrumb';