'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SortableHeader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    button {\n        opacity: 0.2;\n        &.sorted {\n            opacity: 1;\n        }\n        transition: 0.25s ease-in-out;\n    }\n\n    &:hover button {\n        opacity: 0.8;\n    }\n\n    .rotate {\n        transform: rotate(180deg);\n    }\n'], ['\n    button {\n        opacity: 0.2;\n        &.sorted {\n            opacity: 1;\n        }\n        transition: 0.25s ease-in-out;\n    }\n\n    &:hover button {\n        opacity: 0.8;\n    }\n\n    .rotate {\n        transform: rotate(180deg);\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icons = require('../icons');

var _buttons = require('../buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Th = _styledComponents2.default.th(_templateObject);

Th.displayName = 'Th';

var SortableHeader = exports.SortableHeader = function (_React$Component) {
    _inherits(SortableHeader, _React$Component);

    function SortableHeader() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SortableHeader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SortableHeader.__proto__ || Object.getPrototypeOf(SortableHeader)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                order = _this$props.order;

            onChange(order === 'DESC' ? 'ASC' : 'DESC');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SortableHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                order = _props.order,
                sortLabel = _props.sortLabel,
                otherProps = _objectWithoutProperties(_props, ['children', 'order', 'sortLabel']);

            return _react2.default.createElement(
                Th,
                otherProps,
                children,
                _react2.default.createElement(
                    _buttons.GhostButton,
                    {
                        'aria-label': sortLabel || 'Trier par ordre ' + (order === 'ASC' ? 'descendant' : 'ascendant'),
                        onClick: this.handleClick,
                        className: (0, _classnames2.default)({
                            sorted: order !== null,
                            rotate: order === 'DESC'
                        })
                    },
                    order === 'ASC' ? _react2.default.createElement(_icons.ArrowUpIcon, null) : _react2.default.createElement(_icons.ArrowDownIcon, null)
                )
            );
        }
    }]);

    return SortableHeader;
}(_react2.default.Component);

SortableHeader.propTypes = {
    children: _propTypes2.default.node,
    sortLabel: _propTypes2.default.string,
    order: _propTypes2.default.oneOf([null, 'ASC', 'DESC']),
    onChange: _propTypes2.default.func.isRequired
};

exports.default = SortableHeader;