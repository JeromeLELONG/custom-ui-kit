'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Modal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.7);\n    z-index: 1000;\n'], ['\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.7);\n    z-index: 1000;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 80vw;\n    height: 70vh;\n    margin: auto;\n    background-color: ', ';\n    margin-top: 15vh;\n    border-radius: ', ';\n    position: relative;\n'], ['\n    width: 80vw;\n    height: 70vh;\n    margin: auto;\n    background-color: ', ';\n    margin-top: 15vh;\n    border-radius: ', ';\n    position: relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 100%;\n    background-color: ', ';\n    background-size: cover;\n    clip-path: polygon(20% 120%, 120% 0%, 0% 0%);\n    border-radius: ', ';\n    position: absolute;\n    top: 0;\n    left: 0;\n'], ['\n    width: 100%;\n    height: 100%;\n    background-color: ', ';\n    background-size: cover;\n    clip-path: polygon(20% 120%, 120% 0%, 0% 0%);\n    border-radius: ', ';\n    position: absolute;\n    top: 0;\n    left: 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n'], ['\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    margin: ', ';\n    width: calc(100% - ', 'ex);\n    height: calc(100% - ', 'ex);\n'], ['\n    margin: ', ';\n    width: calc(100% - ', 'ex);\n    height: calc(100% - ', 'ex);\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: ', ';\n'], ['\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icons = require('../icons');

var _buttons = require('../buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Mask = _styledComponents2.default.div(_templateObject);

var Background = _styledComponents2.default.div(_templateObject2, function (_ref) {
    var theme = _ref.theme;
    return theme.colors.lightGrey;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.xxs;
});

var BackgroundEffect = _styledComponents2.default.div(_templateObject3, function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.lightBlue;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.spacing.xxs;
});

var Container = _styledComponents2.default.div(_templateObject4);

var Content = _styledComponents2.default.div(_templateObject5, function (_ref5) {
    var spacing = _ref5.theme.spacing;
    return spacing.l + ' ' + spacing.xl;
}, function (_ref6) {
    var theme = _ref6.theme;
    return '' + theme.spaceBase * 13;
}, function (_ref7) {
    var theme = _ref7.theme;
    return '' + theme.spaceBase * 8;
});

var CloseButton = (0, _styledComponents2.default)(_buttons.GhostButton)(_templateObject6, function (_ref8) {
    var theme = _ref8.theme;
    return theme.spacing.m;
});

var Modal = exports.Modal = function (_Component) {
    _inherits(Modal, _Component);

    function Modal() {
        var _ref9;

        var _temp, _this, _ret;

        _classCallCheck(this, Modal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref9 = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref9, [this].concat(args))), _this), _this.onKeyDown = function (evt) {
            var _this$props = _this.props,
                closable = _this$props.closable,
                onClose = _this$props.onClose;

            // On ESC key down

            if (closable && evt.keyCode === 27) {
                onClose(evt);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                closable = _props.closable,
                closeOnEscape = _props.closeOnEscape;


            if (closable && closeOnEscape) {
                document.addEventListener('keydown', this.onKeyDown, false);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var _props2 = this.props,
                closable = _props2.closable,
                closeOnEscape = _props2.closeOnEscape;


            if (closable && closeOnEscape) {
                document.removeEventListener('keydown', this.onKeyDown, false);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                children = _props3.children,
                closable = _props3.closable,
                onClose = _props3.onClose;


            return _react2.default.createElement(
                Mask,
                null,
                _react2.default.createElement(
                    Background,
                    null,
                    _react2.default.createElement(BackgroundEffect, null),
                    _react2.default.createElement(
                        Container,
                        null,
                        _react2.default.createElement(
                            Content,
                            null,
                            children
                        )
                    ),
                    closable && _react2.default.createElement(
                        CloseButton,
                        { onClick: onClose, 'data-testid': 'close-button' },
                        _react2.default.createElement(_icons.CrossIcon, null)
                    )
                )
            );
        }
    }]);

    return Modal;
}(_react.Component);

Modal.propTypes = {
    children: _propTypes.PropTypes.node.isRequired,
    onClose: _propTypes.PropTypes.func,
    closable: _propTypes.PropTypes.bool,
    closeOnEscape: _propTypes.PropTypes.bool
};

Modal.defaultProps = {
    onClose: function onClose() {},
    closable: true,
    closeOnEscape: true
};