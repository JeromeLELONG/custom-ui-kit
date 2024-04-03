'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Validator = require('./Validator');

var _icons = require('./icons');

var _forms = require('./forms');

var _buttons = require('./buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Validator />', function () {
    var defaultProps = {
        onAccepted: function onAccepted() {},
        onRejected: function onRejected() {}
    };

    it('should ask for a rejection comment when clicking on reject button', function () {
        var props = _extends({}, defaultProps);
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Validator.Validator, props));

        var rejectButton = wrapper.find(_icons.CrossIcon).parent();
        rejectButton.simulate('click');

        expect(wrapper.find('Label').prop('children')).toContain('Pourquoi refusez-vous cette demande ?');
        expect(wrapper.find(_forms.Input)).toHaveLength(1);
    });

    it('should ask for a validation comment when clicking on accept button', function () {
        var props = _extends({}, defaultProps);
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Validator.Validator, props));

        var acceptButton = wrapper.find(_icons.SuccessIcon).parent();
        acceptButton.simulate('click');

        expect(wrapper.find('Label').prop('children')).toContain('Pourquoi acceptez-vous cette demande ?');
        expect(wrapper.find(_forms.Input)).toHaveLength(1);
    });

    it('should require a comment for both accept and reject actions', function () {
        var test = function test(action, isCommentRequired) {
            var props = _extends({}, defaultProps);
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Validator.Validator, props));

            var buttonNodeName = action === 'accept' ? _icons.SuccessIcon : _icons.CrossIcon;
            var button = wrapper.find(buttonNodeName).parent();
            button.simulate('click');

            wrapper.find('form').simulate('submit');
            wrapper.update();

            expect(wrapper.find(_forms.FormErrorMessage).length > 0).toBe(isCommentRequired);
        };

        ['accept', 'reject'].forEach(function (action) {
            return test(action, true);
        });
    });

    it('should call `onRejected` prop with given comment when submitting rejection comment', function () {
        var onRejected = jest.fn();
        var props = _extends({}, defaultProps, {
            onRejected: onRejected
        });

        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Validator.Validator, props));

        var rejectButton = wrapper.find(_icons.CrossIcon).parent();
        rejectButton.simulate('click');

        wrapper.find(_forms.Input).simulate("change", {
            target: {
                value: 'Whatever...'
            }
        });

        var event = { name: 'event' };
        wrapper.find('form').simulate('submit', event);

        expect(onRejected).toHaveBeenCalledWith(event, 'Whatever...');
    });

    it('should call `onAccept` prop with given comment when submitting acception comment', function () {
        var onAccepted = jest.fn();
        var props = _extends({}, defaultProps, {
            onAccepted: onAccepted
        });

        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Validator.Validator, props));

        var rejectButton = wrapper.find(_icons.SuccessIcon).parent();
        rejectButton.simulate('click');

        wrapper.find(_forms.Input).simulate("change", {
            target: {
                value: 'Whatever...'
            }
        });

        var event = { name: 'event' };
        wrapper.find('form').simulate('submit', event);

        expect(onAccepted).toHaveBeenCalledWith(event, 'Whatever...');
    });

    it('should allow to customize all labels', function () {
        var props = _extends({}, defaultProps, {
            decisionLabel: function decisionLabel(intent) {
                return 'Do you really want to ' + intent + ' this renewal?';
            },
            errorLabel: function errorLabel() {
                return 'Please fill in this field!';
            },
            submitLabel: function submitLabel(intent) {
                return intent === 'reject' ? 'Reject' : 'Accept';
            }
        });

        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Validator.Validator, props));

        var rejectButton = wrapper.find(_icons.CrossIcon).parent();
        rejectButton.simulate('click');
        wrapper.find('form').simulate('submit');

        expect(wrapper.find('Label').prop('children')).toContain('Do you really want to reject this renewal?');
        expect(wrapper.find(_forms.FormErrorMessage).prop('children')).toBe('Please fill in this field!');
        expect(wrapper.find(_buttons.DangerButton).prop('children')).toBe('Reject');
    });

    it('should not require any comment if validation is not commentable', function () {
        var onRejected = jest.fn();

        var props = _extends({}, defaultProps, {
            commentable: false,
            onRejected: onRejected
        });

        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Validator.Validator, props));

        var rejectButton = wrapper.find(_icons.CrossIcon).parent();
        rejectButton.simulate('click');
        expect(onRejected).toHaveBeenCalled();
    });

    it('should allow to change decision', function () {
        var props = _extends({}, defaultProps);
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Validator.Validator, props));

        var rejectButton = wrapper.find(_icons.CrossIcon).parent();
        rejectButton.simulate('click');

        wrapper.find(_forms.Input).simulate("change", {
            target: {
                value: 'Whatever...'
            }
        });

        var backButton = wrapper.find(_icons.ArrowLeftIcon).parent();
        backButton.simulate('click');

        var acceptButton = wrapper.find(_icons.SuccessIcon).parent();
        acceptButton.simulate('click');

        expect(wrapper.find(_forms.Input).prop('value')).toBe('');
    });
});