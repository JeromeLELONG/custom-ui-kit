'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LimitedTextArea = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    text-align: right;\n    font-size: 0.875rem;\n    margin-top: 0;\n'], ['\n    text-align: right;\n    font-size: 0.875rem;\n    margin-top: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require('./Input');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTextArea = _Input.Input.withComponent('textarea');

var Limit = _styledComponents2.default.p(_templateObject);

var LimitedTextArea = exports.LimitedTextArea = function (_React$PureComponent) {
    _inherits(LimitedTextArea, _React$PureComponent);

    function LimitedTextArea() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LimitedTextArea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LimitedTextArea.__proto__ || Object.getPrototypeOf(LimitedTextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            numberChars: (0, _lodash.get)(_this.props, 'value.length', 0)
        }, _this.onChange = function (event) {
            var value = event.target.value.slice(0, _this.props.limit);

            _this.setState({ numberChars: value.length });
            _this.props.onChange(value);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LimitedTextArea, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                limit = _props.limit,
                otherProps = _objectWithoutProperties(_props, ['limit']);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(StyledTextArea, _extends({}, otherProps, { onChange: this.onChange })),
                _react2.default.createElement(
                    Limit,
                    null,
                    'Caract\xE8res : ',
                    this.state.numberChars,
                    ' / ',
                    limit
                )
            );
        }
    }]);

    return LimitedTextArea;
}(_react2.default.PureComponent);

LimitedTextArea.propTypes = {
    limit: _propTypes2.default.number.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    value: _propTypes2.default.any
};