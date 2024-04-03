'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HistoryItem = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n\n    & > div {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        & .date {\n            color: ', ';\n            font-size: ', ';\n            font-style: italic;\n            margin-top: ', ';\n            margin-bottom: ', ';\n        }\n\n        & > button + button {\n            margin-top: ', ';\n        }\n    }\n'], ['\n    display: flex;\n\n    & > div {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        & .date {\n            color: ', ';\n            font-size: ', ';\n            font-style: italic;\n            margin-top: ', ';\n            margin-bottom: ', ';\n        }\n\n        & > button + button {\n            margin-top: ', ';\n        }\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _buttons = require('../../buttons');

var _historyScore = require('./history-score');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HistoryItemContainer = _styledComponents2.default.div(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.colors.warmGrey11c;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fontSizes.s;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.spacing.xxs;
}, function (_ref4) {
    var theme = _ref4.theme;
    return theme.spacing.xs;
}, function (_ref5) {
    var theme = _ref5.theme;
    return theme.spacing.xxs;
});

var HistoryItem = exports.HistoryItem = function HistoryItem(_ref6) {
    var ue = _ref6.ue,
        assignment = _ref6.assignment;
    return _react2.default.createElement(
        HistoryItemContainer,
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'b',
                null,
                ue,
                ' - ',
                assignment
            ),
            _react2.default.createElement(
                'div',
                { className: 'date' },
                'Rendu le 15/04/2018 \xE0 19:34'
            ),
            _react2.default.createElement(
                _buttons.SecondaryButton,
                null,
                'Corrig\xE9'
            ),
            _react2.default.createElement(
                _buttons.SecondaryButton,
                null,
                'Commentaires'
            )
        ),
        _react2.default.createElement(_historyScore.HistoryScore, { score: 17 })
    );
};