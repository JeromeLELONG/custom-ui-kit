'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.applyGlobals = exports.theme = undefined;

var _templateObject = _taggedTemplateLiteral(['\n        ', '\n\n        @font-face {\n            font-family: \'maple\';\n            src: url("/fonts/maple-light-webfont.eot");\n            src: url("/fonts/maple-light-webfont.eot?#iefix") format("embedded-opentype"), url("/fonts/maple-light-webfont.woff2") format("woff2"), url("/fonts/maple-light-webfont.woff") format("woff"), url("/fonts/maple-light-webfont.ttf") format("truetype"), url("/fonts/maple-light-webfont.svg#mapleregular") format("svg");\n            font-weight: 200;\n            font-style: normal;\n        }\n\n        @font-face {\n            font-family: \'maple\';\n            src: url("/fonts/maple-regular-webfont.eot");\n            src: url("/fonts/maple-regular-webfont.eot?#iefix") format("embedded-opentype"), url("/fonts/maple-regular-webfont.woff2") format("woff2"), url("/fonts/maple-regular-webfont.woff") format("woff"), url("/fonts/maple-regular-webfont.ttf") format("truetype"), url("/fonts/maple-regular-webfont.svg#maple_regularregular") format("svg");\n            font-weight: 400;\n            font-style: normal;\n        }\n\n        @font-face {\n            font-family: \'maple\';\n            src: url("/fonts/maple-medium-webfont.eot");\n            src: url("/fonts/maple-medium-webfont.eot?#iefix") format("embedded-opentype"), url("/fonts/maple-medium-webfont.woff2") format("woff2"), url("/fonts/maple-medium-webfont.woff") format("woff"), url("/fonts/maple-medium-webfont.ttf") format("truetype"), url("/fonts/maple-medium-webfont.svg#maplemedium") format("svg");\n            font-weight: 700;\n            font-style: normal;\n        }\n\n        @font-face {\n            font-family: \'maple\';\n            src: url("/fonts/maple-bold-webfont.eot");\n            src: url("/fonts/maple-bold-webfont.eot?#iefix") format("embedded-opentype"), url("/fonts/maple-bold-webfont.woff2") format("woff2"), url("/fonts/maple-bold-webfont.woff") format("woff"), url("/fonts/maple-bold-webfont.ttf") format("truetype"), url("/fonts/maple-bold-webfont.svg#mapleregular") format("svg");\n            font-weight: 900;\n            font-style: normal;\n        }\n\n        * {\n            box-sizing: border-box;\n        }\n\n        html {\n            width: 100%;\n            height: 100%;\n        }\n\n        body {\n            width: 100%;\n            height: 100%;\n            background-color: ', ';\n            font-size: 16px;\n            font-family: \'Open Sans\';\n            padding-top: ', ';\n        }\n\n        #root {\n            width: 100%;\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n        }\n\n        p {\n            line-height: 1.5;\n        }\n    '], ['\n        ', '\n\n        @font-face {\n            font-family: \'maple\';\n            src: url("/fonts/maple-light-webfont.eot");\n            src: url("/fonts/maple-light-webfont.eot?#iefix") format("embedded-opentype"), url("/fonts/maple-light-webfont.woff2") format("woff2"), url("/fonts/maple-light-webfont.woff") format("woff"), url("/fonts/maple-light-webfont.ttf") format("truetype"), url("/fonts/maple-light-webfont.svg#mapleregular") format("svg");\n            font-weight: 200;\n            font-style: normal;\n        }\n\n        @font-face {\n            font-family: \'maple\';\n            src: url("/fonts/maple-regular-webfont.eot");\n            src: url("/fonts/maple-regular-webfont.eot?#iefix") format("embedded-opentype"), url("/fonts/maple-regular-webfont.woff2") format("woff2"), url("/fonts/maple-regular-webfont.woff") format("woff"), url("/fonts/maple-regular-webfont.ttf") format("truetype"), url("/fonts/maple-regular-webfont.svg#maple_regularregular") format("svg");\n            font-weight: 400;\n            font-style: normal;\n        }\n\n        @font-face {\n            font-family: \'maple\';\n            src: url("/fonts/maple-medium-webfont.eot");\n            src: url("/fonts/maple-medium-webfont.eot?#iefix") format("embedded-opentype"), url("/fonts/maple-medium-webfont.woff2") format("woff2"), url("/fonts/maple-medium-webfont.woff") format("woff"), url("/fonts/maple-medium-webfont.ttf") format("truetype"), url("/fonts/maple-medium-webfont.svg#maplemedium") format("svg");\n            font-weight: 700;\n            font-style: normal;\n        }\n\n        @font-face {\n            font-family: \'maple\';\n            src: url("/fonts/maple-bold-webfont.eot");\n            src: url("/fonts/maple-bold-webfont.eot?#iefix") format("embedded-opentype"), url("/fonts/maple-bold-webfont.woff2") format("woff2"), url("/fonts/maple-bold-webfont.woff") format("woff"), url("/fonts/maple-bold-webfont.ttf") format("truetype"), url("/fonts/maple-bold-webfont.svg#mapleregular") format("svg");\n            font-weight: 900;\n            font-style: normal;\n        }\n\n        * {\n            box-sizing: border-box;\n        }\n\n        html {\n            width: 100%;\n            height: 100%;\n        }\n\n        body {\n            width: 100%;\n            height: 100%;\n            background-color: ', ';\n            font-size: 16px;\n            font-family: \'Open Sans\';\n            padding-top: ', ';\n        }\n\n        #root {\n            width: 100%;\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n        }\n\n        p {\n            line-height: 1.5;\n        }\n    ']);

var _styledComponents = require('styled-components');

var _styledNormalize = require('styled-normalize');

var _styledNormalize2 = _interopRequireDefault(_styledNormalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Unit is ex
var spaceBase = 1.2;
var fontBase = 1.33;

var fontSizes = {
    /* tslint:disable */
    base: fontBase + 'ex',
    xxs: fontBase * 0.25 + 'ex',
    xs: fontBase * 0.75 + 'ex',
    s: fontBase + 'ex',
    m: fontBase * 1.5 + 'ex',
    l: fontBase * 2.5 + 'ex',
    xl: fontBase * 4 + 'ex'
    /* tslint:enable */
};

var theme = exports.theme = {
    spaceBase: spaceBase,
    colors: {
        black: '#000000',
        blue: '#5766ae',
        green: '#52BD4A',
        lightBlue: '#e5e6ed',
        lightGrey: '#f4f4f4',
        lightRed: '#eb9a9b',
        orange: '#FFC300',
        primaryRed: '#b1002a',
        red: '#fa575a',
        warmGrey11c: '#857761',
        warmGrey4c: '#cfc8c0',
        warmGrey8c: '#aa9f97',
        white: '#ffffff'
    },

    fonts: {
        appHeader: 'bold ' + fontSizes.l + ' maple, \'Open Sans\'',
        button: fontSizes.s + ' \'Open Sans\', sans-serif',
        copy: fontSizes.s + ' \'Open Sans\', sans-serif',
        title: fontSizes.l + ' \'Open Sans\', sans-serif'
    },

    fontSizes: fontSizes,

    maxScreenWidth: '1280px',

    spacing: {
        /* tslint:disable */
        base: spaceBase + 'ex',
        xxs: spaceBase * 0.5 + 'ex',
        xs: spaceBase + 'ex',
        s: spaceBase * 1.5 + 'ex',
        m: spaceBase * 2.5 + 'ex',
        l: spaceBase * 4 + 'ex',
        xl: spaceBase * 6.5 + 'ex'
        /* tslint:enable */
    },
    /* tslint:disable */

    transitions: {
        duration: '0.33s',
        longDuration: '0.66s',
        ease: 'ease-out'
    },

    medias: {
        largerThanPhone: '@media (min-width: 600px)'
    }
};

var applyGlobals = exports.applyGlobals = function applyGlobals() {
    (0, _styledComponents.injectGlobal)(_templateObject, _styledNormalize2.default, theme.colors.lightGrey, theme.spacing.xl);
};