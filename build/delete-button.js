'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DeleteButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n'], ['\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _buttons = require('./buttons');

var _confirm = require('./confirm');

var _errorMessage = require('./error-message');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonWithErrorContainer = _styledComponents2.default.div(_templateObject);

var DeleteButton = exports.DeleteButton = function DeleteButton(_ref) {
    var error = _ref.error,
        deleting = _ref.deleting,
        onDelete = _ref.onDelete;
    return _react2.default.createElement(
        _confirm.ConfirmButton,
        { onConfirm: function onConfirm() {
                return onDelete();
            } },
        function (_ref2) {
            var handleRequestConfirm = _ref2.handleRequestConfirm;
            return _react2.default.createElement(
                ButtonWithErrorContainer,
                null,
                _react2.default.createElement(
                    _buttons.GhostButton,
                    {
                        'data-testid': 'button-request-delete',
                        onClick: handleRequestConfirm
                    },
                    deleting && _react2.default.createElement(
                        _react.Fragment,
                        null,
                        'Suppression...'
                    ),
                    !deleting && _react2.default.createElement(
                        _react.Fragment,
                        null,
                        'Supprimer'
                    )
                ),
                error && _react2.default.createElement(
                    _errorMessage.ErrorMessage,
                    { 'data-testid': 'error-message' },
                    error
                )
            );
        }
    );
};

DeleteButton.propTypes = {
    error: _propTypes2.default.string,
    deleting: _propTypes2.default.bool,
    onDelete: _propTypes2.default.func
};