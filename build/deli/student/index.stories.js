'use strict';

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    justify-content: center;\n\n    & > div {\n        display: flex;\n        flex-direction: column;\n    }\n\n    & > :last-child {\n        margin-left: 2rem;\n    }\n    & > :first-child {\n        flex-basis: 60%;\n    }\n'], ['\n    display: flex;\n    justify-content: center;\n\n    & > div {\n        display: flex;\n        flex-direction: column;\n    }\n\n    & > :last-child {\n        margin-left: 2rem;\n    }\n    & > :first-child {\n        flex-basis: 60%;\n    }\n']);

var _addonInfo = require('@storybook/addon-info');

var _addonKnobs = require('@storybook/addon-knobs');

var _react = require('@storybook/react');

var _react2 = require('react');

var React = _interopRequireWildcard(_react2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _card = require('../../card');

var _title = require('../../title');

var _assignment = require('./assignment');

var _assignmentList = require('./assignment-list');

var _historyItem = require('./history-item');

var _historyList = require('./history-list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var stories = (0, _react.storiesOf)('Deli - Student', module);
stories.addDecorator(_addonKnobs.withKnobs);

var Container = _styledComponents2.default.div(_templateObject);

stories.add('Home', (0, _addonInfo.withInfo)({ inline: true })(function () {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            _title.Title,
            null,
            'bonjour Marcel,'
        ),
        React.createElement(
            Container,
            null,
            React.createElement(
                'div',
                null,
                React.createElement(
                    _card.PrimaryCard,
                    null,
                    React.createElement(
                        _card.CardTitle,
                        null,
                        'Devoirs \xE0 rendre'
                    ),
                    React.createElement(
                        _card.CardSubTitle,
                        null,
                        'Ech\xE9ances pass\xE9es'
                    ),
                    React.createElement(
                        _assignmentList.AssignmentList,
                        null,
                        React.createElement(
                            'li',
                            null,
                            React.createElement(_assignment.Assignment, {
                                ue: 'UE 532',
                                assignment: 'Devoir 2',
                                dueDate: '2018-04-18'
                            })
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(_assignment.Assignment, {
                                ue: 'UE 533',
                                assignment: 'Devoir 2',
                                dueDate: '2018-04-18'
                            })
                        )
                    ),
                    React.createElement(
                        _card.CardSubTitle,
                        null,
                        'Prochaines \xE9ch\xE9ances'
                    ),
                    React.createElement(
                        _assignmentList.AssignmentList,
                        null,
                        React.createElement(
                            'li',
                            null,
                            React.createElement(_assignment.Assignment, {
                                ue: 'UE 532',
                                assignment: 'Devoir 3',
                                dueDate: '2018-06-18'
                            })
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(_assignment.Assignment, {
                                ue: 'UE 533',
                                assignment: 'Devoir 3',
                                dueDate: '2018-06-18'
                            })
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(_assignment.Assignment, {
                                ue: 'UE 534',
                                assignment: 'Devoir 3',
                                dueDate: '2018-06-18',
                                sentDate: '2018-06-10T08:17:28.970Z'
                            })
                        )
                    )
                ),
                React.createElement(
                    _card.SecondaryCard,
                    null,
                    React.createElement(
                        _card.CardTitle,
                        null,
                        'A venir'
                    ),
                    React.createElement(
                        _assignmentList.AssignmentList,
                        null,
                        React.createElement(
                            'li',
                            null,
                            React.createElement(_assignment.Assignment, {
                                ue: 'UE 532',
                                assignment: 'Devoir 1',
                                dueDate: '2018-11-18'
                            })
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(_assignment.Assignment, {
                                ue: 'UE 533',
                                assignment: 'Devoir 1',
                                dueDate: '2018-11-18'
                            })
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(_assignment.Assignment, {
                                ue: 'UE 534',
                                assignment: 'Devoir 1',
                                dueDate: '2018-11-18'
                            })
                        )
                    )
                )
            ),
            React.createElement(
                _card.GhostCard,
                null,
                React.createElement(
                    _card.CardTitle,
                    null,
                    'Devoirs rendus'
                ),
                React.createElement(
                    _historyList.HistoryList,
                    null,
                    React.createElement(
                        'li',
                        null,
                        React.createElement(_historyItem.HistoryItem, {
                            ue: 'UE 533',
                            assignment: 'Devoir 1',
                            date: '2018-04-16T15:31:44.074Z',
                            status: 'corrected',
                            score: 18
                        })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(_historyItem.HistoryItem, {
                            ue: 'UE 532',
                            assignment: 'Devoir 1',
                            date: '2018-04-16T19:31:44.074Z',
                            status: 'corrected',
                            score: 12
                        })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(_historyItem.HistoryItem, {
                            ue: 'UE 535',
                            assignment: 'Devoir 1',
                            date: '2018-04-13T14:25:44.074Z',
                            status: 'corrected',
                            score: 6
                        })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(_historyItem.HistoryItem, {
                            ue: 'UE 536',
                            assignment: 'Devoir 1',
                            date: '2018-03-11T09:15:44.074Z',
                            status: 'corrected',
                            score: 11
                        })
                    )
                )
            )
        )
    );
}));