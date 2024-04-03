'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Validator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    margin-right: ', '\n'], ['\n    margin-right: ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    align-items: center;\n    margin-bottom: 0;\n    font-size: 1rem;\n'], ['\n    display: flex;\n    align-items: center;\n    margin-bottom: 0;\n    font-size: 1rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n    align-items: center;\n    & > *:first-child {\n        flex: 1 0 0;\n        margin-right: ', ';\n    }\n\n    & > *:last-child {\n        flex: 0 0 64px;\n    }\n'], ['\n    display: flex;\n    align-items: center;\n    & > *:first-child {\n        flex: 1 0 0;\n        margin-right: ', ';\n    }\n\n    & > *:last-child {\n        flex: 0 0 64px;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _buttons = require('./buttons');

var _icons = require('./icons');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _forms = require('./forms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WithMarginDangerButton = (0, _styledComponents2.default)(_buttons.DangerButton)(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.spacing.xs;
});

var Label = (0, _styledComponents2.default)(_forms.FormLabel)(_templateObject2);

Label.displayName = 'Label';

var CommentRow = _styledComponents2.default.div(_templateObject3, function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.s;
});

var Validator = exports.Validator = function (_React$PureComponent) {
    _inherits(Validator, _React$PureComponent);

    function Validator() {
        var _ref3;

        var _temp, _this, _ret;

        _classCallCheck(this, Validator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Validator.__proto__ || Object.getPrototypeOf(Validator)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
            intent: null,
            error: null,
            reason: ''
        }, _this.id = _uuid2.default.v4(), _this.handleResetIntent = function () {
            _this.setState({ intent: null, reason: '' });
        }, _this.handleRejectedClick = function () {
            if (!_this.props.commentable) {
                _this.props.onRejected();
                return;
            }

            if (!_this.state.intent) {
                _this.setState({ intent: 'reject' });
                return;
            }
        }, _this.handleAcceptedClick = function () {
            if (!_this.props.commentable) {
                _this.props.onAccepted();
                return;
            }

            if (_this.props.commentable && !_this.state.intent) {
                _this.setState({ intent: 'accept' });
                return;
            }
        }, _this.handleReasonChange = function (e) {
            _this.setState({ reason: e.target.value });
        }, _this.handleReasonSubmit = function (e) {
            var errorLabel = _this.props.errorLabel;
            var _this$state = _this.state,
                intent = _this$state.intent,
                reason = _this$state.reason;


            if (!reason) {
                _this.setState({ error: errorLabel });
                return;
            }

            _this.props[intent === 'reject' ? 'onRejected' : 'onAccepted'](e, reason);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Validator, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                decisionLabel = _props.decisionLabel,
                submitLabel = _props.submitLabel;
            var _state = this.state,
                error = _state.error,
                intent = _state.intent;


            return _react2.default.createElement(
                'div',
                null,
                !intent && _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        WithMarginDangerButton,
                        { condensed: true, onClick: this.handleRejectedClick },
                        _react2.default.createElement(_icons.CrossIcon, { width: 12 })
                    ),
                    _react2.default.createElement(
                        _buttons.PrimaryButton,
                        { condensed: true, onClick: this.handleAcceptedClick },
                        _react2.default.createElement(_icons.SuccessIcon, { width: 14 })
                    )
                ),
                intent && _react2.default.createElement(
                    'form',
                    { action: '#', onSubmit: this.handleReasonSubmit },
                    _react2.default.createElement(
                        Label,
                        { htmlFor: this.id },
                        _react2.default.createElement(
                            _buttons.GhostButton,
                            { onClick: this.handleResetIntent, condensed: true },
                            _react2.default.createElement(_icons.ArrowLeftIcon, { onClick: this.handleResetIntent })
                        ),
                        decisionLabel(intent)
                    ),
                    _react2.default.createElement(
                        CommentRow,
                        null,
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_forms.Input, { id: this.id, onChange: this.handleReasonChange, value: this.state.reason })
                        ),
                        intent === 'reject' ? _react2.default.createElement(
                            _buttons.DangerButton,
                            { type: 'submit' },
                            submitLabel(intent)
                        ) : _react2.default.createElement(
                            _buttons.PrimaryButton,
                            { type: 'submit' },
                            submitLabel(intent)
                        )
                    ),
                    error && _react2.default.createElement(
                        _forms.FormErrorMessage,
                        null,
                        error(intent)
                    )
                )
            );
        }
    }]);

    return Validator;
}(_react2.default.PureComponent);

Validator.propTypes = {
    commentable: _propTypes2.default.bool,
    onAccepted: _propTypes2.default.func.isRequired,
    onRejected: _propTypes2.default.func.isRequired,
    decisionLabel: _propTypes2.default.func,
    errorLabel: _propTypes2.default.func,
    submitLabel: _propTypes2.default.func
};
Validator.defaultProps = {
    commentable: true,
    decisionLabel: function decisionLabel(intent) {
        return 'Pourquoi ' + (intent === 'reject' ? 'refusez' : 'acceptez') + '-vous cette demande ?';
    },
    errorLabel: function errorLabel() {
        return 'La motivation de votre décision est obligatoire.';
    },
    submitLabel: function submitLabel(intent) {
        return intent === 'reject' ? 'Refuser' : 'Accepter';
    }
};