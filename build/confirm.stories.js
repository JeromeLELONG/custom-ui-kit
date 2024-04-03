'use strict';

var _addonInfo = require('@storybook/addon-info');

var _react = require('@storybook/react');

var _react2 = require('react');

var React = _interopRequireWildcard(_react2);

var _confirm = require('./confirm');

var _buttons = require('./buttons');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react.storiesOf)('Confirm', module);

stories.add('ConfirmButton', (0, _addonInfo.withInfo)({
    inline: true,
    source: false,
    text: '\n~~~jsx\nconst ButtonWithErrorContainer = styled.div`\n    display: flex;\n        flex-direction: column;\n        align-items: center;\n`;\n\nexport const DeleteUserButtonView = ({ error, deleting, onDelete }) => (\n    <ConfirmButton onConfirm={() => onDelete()}>\n        {({ handleRequestConfirm }) => (\n            <ButtonWithErrorContainer>\n                <GhostButton\n                    data-testid="button-request-delete"\n                    onClick={handleRequestConfirm}\n                >\n                    {deleting && <span>Suppression...</span>}\n                    {!deleting && <span>Supprimer</span>}\n                </GhostButton>\n                {error && (\n                    <ErrorMessage data-testid="error-message">\n                        {error}\n                    </ErrorMessage>\n                )}\n            </ButtonWithErrorContainer>\n        )}\n    </ConfirmButton>\n);\n~~~\n'
})(function () {
    return React.createElement(
        _confirm.ConfirmButton,
        { onConfirm: function onConfirm() {
                return console.log('Action confirmed');
            } },
        function (_ref) {
            var handleRequestConfirm = _ref.handleRequestConfirm;
            return React.createElement(
                _buttons.GhostButton,
                {
                    'data-testid': 'button-request-delete',
                    onClick: handleRequestConfirm
                },
                'Supprimer'
            );
        }
    );
}));