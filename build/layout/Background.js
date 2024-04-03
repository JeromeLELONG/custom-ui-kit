'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Background = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    position: fixed;\n    top: 0;\n    left: -10%;\n    background-color: ', ';\n    background-size: cover;\n    width: 110%;\n    height: 100%;\n    clip-path: polygon(20% 120%, 120% 0%, 0% 0%);\n    z-index: -1;\n'], ['\n    position: fixed;\n    top: 0;\n    left: -10%;\n    background-color: ', ';\n    background-size: cover;\n    width: 110%;\n    height: 100%;\n    clip-path: polygon(20% 120%, 120% 0%, 0% 0%);\n    z-index: -1;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Background = exports.Background = _styledComponents2.default.div(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.colors.lightBlue;
});

Background.displayName = 'Background';