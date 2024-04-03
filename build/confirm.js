'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConfirmButton = exports.Confirm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n'], ['\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n'], ['\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _buttons = require('./buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Confirm = exports.Confirm = function (_Component) {
    _inherits(Confirm, _Component);

    function Confirm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Confirm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call.apply(_ref, [this].concat(args))), _this), _this.state = { confirm: false }, _this.handleRequestConfirm = function () {
            var onRequestConfirm = _this.props.onRequestConfirm;

            _this.setState({ confirm: true });

            if (onRequestConfirm) {
                onRequestConfirm();
            }
        }, _this.handleConfirm = function () {
            var onConfirm = _this.props.onConfirm;

            _this.setState({ confirm: false });

            onConfirm();
        }, _this.handleCancel = function () {
            var onCancel = _this.props.onCancel;

            _this.setState({ confirm: false });

            if (onCancel) {
                onCancel();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Confirm, [{
        key: 'render',
        value: function render() {
            var confirm = this.state.confirm;
            var _props = this.props,
                render = _props.render,
                renderConfirm = _props.renderConfirm;


            if (confirm) {
                return renderConfirm({
                    handleConfirm: this.handleConfirm,
                    handleCancel: this.handleCancel
                });
            }

            return render({
                handleRequestConfirm: this.handleRequestConfirm
            });
        }
    }]);

    return Confirm;
}(_react.Component);

Confirm.propTypes = {
    render: _propTypes2.default.func.isRequired,
    renderConfirm: _propTypes2.default.func.isRequired,
    onCancel: _propTypes2.default.func,
    onConfirm: _propTypes2.default.func.isRequired,
    onRequestConfirm: _propTypes2.default.func
};


var MultipleButtonsContainer = _styledComponents2.default.div(_templateObject);

var ButtonContainer = _styledComponents2.default.div(_templateObject2);

var ConfirmButton = exports.ConfirmButton = function ConfirmButton(_ref2) {
    var children = _ref2.children,
        onConfirm = _ref2.onConfirm;

    return _react2.default.createElement(
        MultipleButtonsContainer,
        null,
        _react2.default.createElement(Confirm, {
            onConfirm: onConfirm,
            render: function render(_ref3) {
                var handleRequestConfirm = _ref3.handleRequestConfirm;
                return _react2.default.createElement(
                    ButtonContainer,
                    null,
                    children({
                        handleRequestConfirm: handleRequestConfirm
                    })
                );
            },
            renderConfirm: function renderConfirm(_ref4) {
                var handleCancel = _ref4.handleCancel,
                    handleConfirm = _ref4.handleConfirm;
                return _react2.default.createElement(
                    _react.Fragment,
                    null,
                    _react2.default.createElement(
                        _buttons.GhostButton,
                        {
                            'data-testid': 'button-confirm',
                            onClick: handleConfirm
                        },
                        'Confirmer'
                    ),
                    _react2.default.createElement(
                        _buttons.GhostButton,
                        {
                            'data-testid': 'button-cancel',
                            onClick: handleCancel
                        },
                        'Annuler'
                    )
                );
            }
        })
    );
};

ConfirmButton.propTypes = {
    children: _propTypes2.default.func.isRequired,
    onConfirm: _propTypes2.default.func.isRequired
};