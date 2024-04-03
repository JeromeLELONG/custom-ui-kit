'use strict';

var _addonInfo = require('@storybook/addon-info');

var _addonKnobs = require('@storybook/addon-knobs');

var _react = require('@storybook/react');

var _react2 = require('react');

var React = _interopRequireWildcard(_react2);

var _title = require('./title');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react.storiesOf)('Primitives', module);
stories.addDecorator(_addonKnobs.withKnobs);

stories.add('Title', (0, _addonInfo.withInfo)({ inline: true })(function () {
  return React.createElement(
    _title.Title,
    null,
    'Un titre'
  );
}));