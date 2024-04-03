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

var _assignment = require('./assignment');

var _assignmentList = require('./assignment-list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var stories = (0, _react3.storiesOf)('Deli - Student', module);
stories.addDecorator(_addonKnobs.withKnobs);

var Container = _styledComponents2.default.div(_templateObject);

stories.add('Assignment - due', (0, _addonInfo.withInfo)({ inline: true })(function () {
    return _react2.default.createElement(_assignment.Assignment, { ue: 'UE 532', assignment: 'Devoir 2', dueDate: '2018-04-18' });
}));
stories.add('Assignment - sent', (0, _addonInfo.withInfo)({ inline: true })(function () {
    return _react2.default.createElement(_assignment.Assignment, {
        ue: 'UE 532',
        assignment: 'Devoir 2',
        dueDate: '2018-04-18',
        sentDate: '2018-06-10T08:17:28.970Z'
    });
}));
stories.add('Assignments', (0, _addonInfo.withInfo)({ inline: true })(function () {
    return _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
            _card.PrimaryCard,
            null,
            _react2.default.createElement(
                _card.CardTitle,
                null,
                'Devoirs \xE0 rendre'
            ),
            _react2.default.createElement(
                _card.CardSubTitle,
                null,
                'Ech\xE9ances pass\xE9es'
            ),
            _react2.default.createElement(
                _assignmentList.AssignmentList,
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_assignment.Assignment, {
                        ue: 'UE 532',
                        assignment: 'Devoir 2',
                        dueDate: '2018-04-18'
                    })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_assignment.Assignment, {
                        ue: 'UE 533',
                        assignment: 'Devoir 2',
                        dueDate: '2018-04-18'
                    })
                )
            ),
            _react2.default.createElement(
                _card.CardSubTitle,
                null,
                'Prochaines \xE9ch\xE9ances'
            ),
            _react2.default.createElement(
                _assignmentList.AssignmentList,
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_assignment.Assignment, {
                        ue: 'UE 532',
                        assignment: 'Devoir 3',
                        dueDate: '2018-06-18'
                    })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_assignment.Assignment, {
                        ue: 'UE 533',
                        assignment: 'Devoir 3',
                        dueDate: '2018-06-18'
                    })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_assignment.Assignment, {
                        ue: 'UE 534',
                        assignment: 'Devoir 3',
                        dueDate: '2018-06-18',
                        sentDate: '2018-06-10T08:17:28.970Z'
                    })
                )
            )
        ),
        _react2.default.createElement(
            _card.SecondaryCard,
            null,
            _react2.default.createElement(
                _card.CardTitle,
                null,
                'A venir'
            ),
            _react2.default.createElement(
                _assignmentList.AssignmentList,
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_assignment.Assignment, {
                        ue: 'UE 532',
                        assignment: 'Devoir 1',
                        dueDate: '2018-11-18'
                    })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_assignment.Assignment, {
                        ue: 'UE 533',
                        assignment: 'Devoir 1',
                        dueDate: '2018-11-18'
                    })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_assignment.Assignment, {
                        ue: 'UE 534',
                        assignment: 'Devoir 1',
                        dueDate: '2018-11-18'
                    })
                )
            )
        )
    );
}));