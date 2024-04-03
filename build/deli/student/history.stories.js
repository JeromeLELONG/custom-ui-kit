'use strict';

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: column;\n'], ['\n    display: flex;\n    flex-direction: column;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addonInfo = require('@storybook/addon-info');

var _addonKnobs = require('@storybook/addon-knobs');

var _react3 = require('@storybook/react');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _card = require('../../card');

var _historyItem = require('./history-item');

var _historyList = require('./history-list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var stories = (0, _react3.storiesOf)('Deli - Student', module);
stories.addDecorator(_addonKnobs.withKnobs);

var Container = _styledComponents2.default.div(_templateObject);

stories.add('History Item - corrected', (0, _addonInfo.withInfo)({ inline: true })(function () {
    return _react2.default.createElement(_historyItem.HistoryItem, {
        ue: 'UE 533',
        assignment: 'Devoir 1',
        date: '2018-04-16T15:31:44.074Z',
        status: 'corrected',
        score: 18
    });
}));
stories.add('History', (0, _addonInfo.withInfo)({ inline: true })(function () {
    return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
            _card.GhostCard,
            null,
            _react2.default.createElement(
                _card.CardTitle,
                null,
                'Devoirs rendus'
            ),
            _react2.default.createElement(
                _historyList.HistoryList,
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_historyItem.HistoryItem, {
                        ue: 'UE 533',
                        assignment: 'Devoir 1',
                        date: '2018-04-16T15:31:44.074Z',
                        status: 'corrected',
                        score: 18
                    })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_historyItem.HistoryItem, {
                        ue: 'UE 532',
                        assignment: 'Devoir 1',
                        date: '2018-04-16T19:31:44.074Z',
                        status: 'corrected',
                        score: 12
                    })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_historyItem.HistoryItem, {
                        ue: 'UE 535',
                        assignment: 'Devoir 1',
                        date: '2018-04-13T14:25:44.074Z',
                        status: 'corrected',
                        score: 6
                    })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_historyItem.HistoryItem, {
                        ue: 'UE 536',
                        assignment: 'Devoir 1',
                        date: '2018-03-11T09:15:44.074Z',
                        status: 'corrected',
                        score: 11
                    })
                )
            )
        )
    );
}));