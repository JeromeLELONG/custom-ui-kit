'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MaxWidthContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: column;\n    align-self: center;\n    max-width: ', ';\n    width: 100%;\n    height: auto;\n    min-height: 100%;\n'], ['\n    display: flex;\n    flex-direction: column;\n    align-self: center;\n    max-width: ', ';\n    width: 100%;\n    height: auto;\n    min-height: 100%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MaxWidthContainer = exports.MaxWidthContainer = _styledComponents2.default.div(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.maxScreenWidth;
});

MaxWidthContainer.displayName = 'MaxWidthContainer';