'use strict';

var _addonInfo = require('@storybook/addon-info');

var _addonKnobs = require('@storybook/addon-knobs');

var _react = require('@storybook/react');

var _react2 = require('react');

var React = _interopRequireWildcard(_react2);

var _card = require('./card');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react.storiesOf)('Cards', module);
stories.addDecorator(_addonKnobs.withKnobs);

stories.add('GhostCard', (0, _addonInfo.withInfo)({ inline: true })(function () {
    return React.createElement(
        _card.GhostCard,
        null,
        'Contenu de la carte'
    );
}));

stories.add('Card', (0, _addonInfo.withInfo)({ inline: true })(function () {
    return React.createElement(
        _card.Card,
        null,
        'Contenu de la carte'
    );
}));

stories.add('PrimaryCard', (0, _addonInfo.withInfo)({ inline: true })(function () {
    return React.createElement(
        _card.PrimaryCard,
        null,
        'Contenu de la carte'
    );
}));

stories.add('PrimaryCard with title and subtitle', (0, _addonInfo.withInfo)({ inline: true })(function () {
    return React.createElement(
        _card.PrimaryCard,
        null,
        React.createElement(
            _card.CardTitle,
            null,
            'Titre'
        ),
        React.createElement(
            _card.CardSubTitle,
            null,
            'Titre'
        )
    );
}));

stories.add('SecondaryCard', (0, _addonInfo.withInfo)({ inline: true })(function () {
    return React.createElement(
        _card.SecondaryCard,
        null,
        'Contenu de la carte'
    );
}));