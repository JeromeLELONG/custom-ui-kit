import React from 'react';
import { shallow } from 'enzyme';
import { Validator } from './Validator';
import { CrossIcon, SuccessIcon, ArrowLeftIcon } from './icons';
import { Input, FormErrorMessage } from './forms';
import { DangerButton } from './buttons';

describe('<Validator />', () => {
    const defaultProps = {
        onAccepted: () => {},
        onRejected: () => {},
    };

    it('should ask for a rejection comment when clicking on reject button', () => {
        const props = {
            ...defaultProps,
        };
        const wrapper = shallow(<Validator {...props} />);

        const rejectButton = wrapper.find(CrossIcon).parent();
        rejectButton.simulate('click');

        expect(wrapper.find('Label').prop('children')).toContain('Pourquoi refusez-vous cette demande ?');
        expect(wrapper.find(Input)).toHaveLength(1);
    });

    it('should ask for a validation comment when clicking on accept button', () => {
        const props = { ...defaultProps };
        const wrapper = shallow(<Validator {...props} />);

        const acceptButton = wrapper.find(SuccessIcon).parent();
        acceptButton.simulate('click');

        expect(wrapper.find('Label').prop('children')).toContain('Pourquoi acceptez-vous cette demande ?');
        expect(wrapper.find(Input)).toHaveLength(1);
    });

    it('should require a comment for both accept and reject actions', () => {
        const test = (action, isCommentRequired) => {
            const props = { ...defaultProps };
            const wrapper = shallow(<Validator {...props} />);

            const buttonNodeName = action === 'accept' ? SuccessIcon : CrossIcon;
            const button = wrapper.find(buttonNodeName).parent();
            button.simulate('click');

            wrapper.find('form').simulate('submit');
            wrapper.update();

            expect(wrapper.find(FormErrorMessage).length > 0).toBe(isCommentRequired);
        };

        ['accept', 'reject'].forEach(action => test(action, true));

    });

    it('should call `onRejected` prop with given comment when submitting rejection comment', () => {
        const onRejected = jest.fn();
        const props = {
            ...defaultProps,
            onRejected,
        };

        const wrapper = shallow(<Validator {...props} />);

        const rejectButton = wrapper.find(CrossIcon).parent();
        rejectButton.simulate('click');

        wrapper.find(Input).simulate("change", {
            target: {
                value: 'Whatever...',
            },
        });

        const event = { name: 'event' };
        wrapper.find('form').simulate('submit', event);

        expect(onRejected).toHaveBeenCalledWith(event, 'Whatever...');
    });

    it('should call `onAccept` prop with given comment when submitting acception comment', () => {
        const onAccepted = jest.fn();
        const props = {
            ...defaultProps,
            onAccepted,
        };

        const wrapper = shallow(<Validator {...props} />);

        const rejectButton = wrapper.find(SuccessIcon).parent();
        rejectButton.simulate('click');

        wrapper.find(Input).simulate("change", {
            target: {
                value: 'Whatever...',
            },
        });

        const event = { name: 'event' };
        wrapper.find('form').simulate('submit', event);

        expect(onAccepted).toHaveBeenCalledWith(event, 'Whatever...');
    });

    it('should allow to customize all labels', () => {
        const props = {
            ...defaultProps,
            decisionLabel: intent => `Do you really want to ${intent} this renewal?`,
            errorLabel: () => 'Please fill in this field!',
            submitLabel: intent => intent === 'reject' ? 'Reject' : 'Accept',
        };

        const wrapper = shallow(<Validator {...props} />);

        const rejectButton = wrapper.find(CrossIcon).parent();
        rejectButton.simulate('click');
        wrapper.find('form').simulate('submit');

        expect(wrapper.find('Label').prop('children')).toContain('Do you really want to reject this renewal?');
        expect(wrapper.find(FormErrorMessage).prop('children')).toBe('Please fill in this field!');
        expect(wrapper.find(DangerButton).prop('children')).toBe('Reject');
    });

    it('should not require any comment if validation is not commentable', () => {
        const onRejected = jest.fn();

        const props = {
            ...defaultProps,
            commentable: false,
            onRejected,
        };

        const wrapper = shallow(<Validator {...props} />);

        const rejectButton = wrapper.find(CrossIcon).parent();
        rejectButton.simulate('click');
        expect(onRejected).toHaveBeenCalled();
    });

    it('should allow to change decision', () => {
        const props = { ...defaultProps };
        const wrapper = shallow(<Validator {...props} />);

        const rejectButton = wrapper.find(CrossIcon).parent();
        rejectButton.simulate('click');

        wrapper.find(Input).simulate("change", {
            target: {
                value: 'Whatever...',
            },
        });

        const backButton = wrapper.find(ArrowLeftIcon).parent();
        backButton.simulate('click');

        const acceptButton = wrapper.find(SuccessIcon).parent();
        acceptButton.simulate('click');

        expect(wrapper.find(Input).prop('value')).toBe('');
    });
});
