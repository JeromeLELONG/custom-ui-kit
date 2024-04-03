'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Assignment = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n\n    & > :first-child {\n        flex-grow: 1;\n    }\n\n    & > div {\n        display: flex;\n        flex-direction: column;\n\n        * + span {\n            margin-left: 1rem;\n        }\n\n        & > * + * {\n            margin-top: 0.25rem;\n\n            span {\n                font-style: italic;\n                font-size: ', ';\n\n                &.green {\n                    color: green;\n                }\n                &.red {\n                    color: red;\n                }\n            }\n        }\n    }\n'], ['\n    display: flex;\n\n    & > :first-child {\n        flex-grow: 1;\n    }\n\n    & > div {\n        display: flex;\n        flex-direction: column;\n\n        * + span {\n            margin-left: 1rem;\n        }\n\n        & > * + * {\n            margin-top: 0.25rem;\n\n            span {\n                font-style: italic;\n                font-size: ', ';\n\n                &.green {\n                    color: green;\n                }\n                &.red {\n                    color: red;\n                }\n            }\n        }\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dateFns = require('date-fns');

var _buttons = require('../../buttons');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AssignmentContainer = _styledComponents2.default.div(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.fontSizes.s;
});

var Assignment = exports.Assignment = function Assignment(_ref2) {
    var assignment = _ref2.assignment,
        dueDate = _ref2.dueDate,
        sentDate = _ref2.sentDate,
        ue = _ref2.ue;
    return _react2.default.createElement(
        AssignmentContainer,
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'b',
                    null,
                    ue
                ),
                ' - ',
                assignment,
                _react2.default.createElement(
                    'span',
                    null,
                    'A rendre le ',
                    (0, _dateFns.format)(dueDate, 'DD/MM/YYYY')
                )
            ),
            sentDate && _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    { className: 'green' },
                    'Rendu le ',
                    (0, _dateFns.format)(sentDate, 'DD/MM/YYYY'),
                    ' \xE0',
                    ' ',
                    (0, _dateFns.format)(dueDate, 'HH:mm')
                )
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _buttons.PrimaryButton,
                null,
                'D\xE9poser'
            )
        )
    );
};