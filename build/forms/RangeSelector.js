'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RangeSelector = exports.RangeSelectorInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: initial;\n    margin: 0 0.5rem;\n'], ['\n    width: initial;\n    margin: 0 0.5rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    align-items: center;\n    font-size: ', ';\n'], ['\n    display: flex;\n    align-items: center;\n    font-size: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    flex: 1 0 0;\n'], ['\n    flex: 1 0 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    flex: 2 0 0;\n'], ['\n    flex: 2 0 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('./Input');

var _FormLabel = require('./FormLabel');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RangeSelectorInput = exports.RangeSelectorInput = (0, _styledComponents2.default)(_Input.Input)(_templateObject);

var MyFormLabel = (0, _styledComponents2.default)(_FormLabel.FormLabel)(_templateObject2, function (_ref) {
    var theme = _ref.theme;
    return theme.fontSizes.m;
});

var LabelSpan = _styledComponents2.default.span(_templateObject3);

var RangeSpan = _styledComponents2.default.span(_templateObject4);

var RangeSelector = exports.RangeSelector = function (_React$PureComponent) {
    _inherits(RangeSelector, _React$PureComponent);

    function RangeSelector() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, RangeSelector);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = RangeSelector.__proto__ || Object.getPrototypeOf(RangeSelector)).call.apply(_ref2, [this].concat(args))), _this), _this.onChangeLowerBound = function (event) {
            _this.props.onChange({
                lowerBound: event.target.value,
                upperBound: _this.props.upperBound
            });
        }, _this.onChangeUpperBound = function (event) {
            _this.props.onChange({
                lowerBound: _this.props.lowerBound,
                upperBound: event.target.value
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RangeSelector, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                lowerBound = _props.lowerBound,
                upperBound = _props.upperBound,
                label = _props.label,
                size = _props.size,
                separator = _props.separator,
                otherProps = _objectWithoutProperties(_props, ['lowerBound', 'upperBound', 'label', 'size', 'separator']);

            return _react2.default.createElement(
                MyFormLabel,
                null,
                _react2.default.createElement(
                    LabelSpan,
                    null,
                    label
                ),
                _react2.default.createElement(
                    RangeSpan,
                    null,
                    _react2.default.createElement(RangeSelectorInput, _extends({}, otherProps, {
                        value: lowerBound,
                        size: size,
                        maxLength: size,
                        type: 'text',
                        onChange: this.onChangeLowerBound,
                        placeholder: 'd\xE9but'
                    })),
                    separator,
                    _react2.default.createElement(RangeSelectorInput, _extends({}, otherProps, {
                        value: upperBound,
                        size: size,
                        maxLength: size,
                        type: 'text',
                        onChange: this.onChangeUpperBound,
                        placeholder: 'fin'
                    }))
                )
            );
        }
    }]);

    return RangeSelector;
}(_react2.default.PureComponent);

RangeSelector.propTypes = {
    onChange: _propTypes2.default.func.isRequired,
    lowerBound: _propTypes2.default.string,
    upperBound: _propTypes2.default.string,
    size: _propTypes2.default.number,
    label: _propTypes2.default.string,
    separator: _propTypes2.default.string
};
RangeSelector.defaultProps = {
    size: 3,
    separator: '-'
};