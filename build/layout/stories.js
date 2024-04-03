'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addonInfo = require('@storybook/addon-info');

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _Background = require('./Background');

var _MaxWidthContainer = require('./MaxWidthContainer');

var _Footer = require('./Footer');

var _Breadcrumb = require('./Breadcrumb');

var _A = require('../A');

var _header = require('./header');

var _buttons = require('../buttons');

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Layout', module);
stories.addDecorator(_addonKnobs.withKnobs);

stories.add('Background', (0, _addonInfo.withInfo)({
    text: 'Page background, displayed below this content box.'
})(function () {
    return _react2.default.createElement(_Background.Background, null);
})).add('Breadcrumb', (0, _addonInfo.withInfo)()(function () {
    return _react2.default.createElement(_Breadcrumb.Breadcrumb, {
        items: [{ label: 'Home', path: '/' }, { label: 'Category', path: '/category' }, { label: 'Article', path: '/category/article' }],
        link: function link(_ref) {
            var label = _ref.label,
                path = _ref.path;
            return _react2.default.createElement(
                _A.A,
                { href: path },
                label
            );
        },
        lastItem: function lastItem(_ref2) {
            var label = _ref2.label;
            return _react2.default.createElement(
                'span',
                null,
                label
            );
        }
    });
})).add('Max Width Container', (0, _addonInfo.withInfo)({
    text: 'All the children of this component are limited in width.' + 'Either resize the window or check the "Viewport" tab below to test on another resolutions.'
})(function () {
    return _react2.default.createElement(
        _MaxWidthContainer.MaxWidthContainer,
        null,
        _react2.default.createElement(
            'div',
            { style: { background: '#fff', margin: '2rem', padding: '2rem' } },
            _react2.default.createElement(
                'h1',
                null,
                'Hello world!'
            )
        )
    );
})).add('Header (no logged user)', function () {
    return _react2.default.createElement(_header.Header, null);
}).add('Header (with logged user) [deprecated API]', function () {
    return _react2.default.createElement(_header.Header, {
        user: {
            logoutUrl: '#logout',
            name: 'John Doe',
            profile: 'Student'
        }
    });
}).add('Header (with logged user)', function () {
    return _react2.default.createElement(_header.Header, { logoutUrl: '#logout', userInformation: 'John Doe' + ' (' + 'Student' + ')' });
}).add('Header (with logged user and custom title)', function () {
    return _react2.default.createElement(_header.Header, {
        logoutUrl: '#logout',
        title: _react2.default.createElement(
            'h1',
            null,
            'This is the title'
        ),
        userInformation: 'John Doe' + ' (' + 'Student' + ')'
    });
}).add('Header (with title only)', function () {
    return _react2.default.createElement(_header.Header, { title: 'This is the title' });
}).add('Header (with logged user and additional action)', function () {
    return _react2.default.createElement(_header.Header, {
        logoutUrl: '#logout',
        userInformation: 'John Doe' + ' (' + 'Student' + ')',
        additionalAction: _react2.default.createElement(
            _header.AppHeaderLink,
            { href: '', title: 'contact' },
            'Contacts'
        )
    });
}).add('Header (with logged user and cartridge)', function () {
    return _react2.default.createElement(_header.Header, {
        logoutUrl: '#logout',
        userInformation: 'John Doe' + ' (' + 'Student' + ')',
        additionalAction: _react2.default.createElement(
            _header.HeaderCartridge,
            {
                icon: _react2.default.createElement(_icons.SuccessIcon, { width: 32, height: 32 }),
                action: _react2.default.createElement(
                    _buttons.Button,
                    null,
                    'Voir mes r\xE9sultats'
                )
            },
            _react2.default.createElement(
                'strong',
                null,
                'Nouveau :'
            ),
            '\xA0Vos devoirs ont \xE9t\xE9 corrig\xE9s !'
        )
    });
}).add('Footer', (0, _addonInfo.withInfo)()(function () {
    return _react2.default.createElement(
        _Footer.Footer,
        null,
        _react2.default.createElement(
            'p',
            null,
            'All rights reserved.'
        )
    );
}));