'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _arrowDownIcon = require('./arrow-down-icon');

var _arrowUpIcon = require('./arrow-up-icon');

var _calendarIcon = require('./calendar-icon');

var _crossIcon = require('./cross-icon');

var _downloadIcon = require('./download-icon');

var _editIcon = require('./edit-icon');

var _envelopeIcon = require('./envelope-icon');

var _searchIcon = require('./search-icon');

var _successIcon = require('./success-icon');

var _trashIcon = require('./trash-icon');

var _uploadingIcon = require('./uploading-icon');

var _warningIcon = require('./warning-icon');

var _arrowLeftIcon = require('./arrow-left-icon');

var _arrowRightIcon = require('./arrow-right-icon');

var _incognitoIcon = require('./incognito-icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = [_arrowDownIcon.ArrowDownIcon, _arrowLeftIcon.ArrowLeftIcon, _arrowUpIcon.ArrowUpIcon, _arrowRightIcon.ArrowRightIcon, _calendarIcon.CalendarIcon, _crossIcon.CrossIcon, _downloadIcon.DownloadIcon, _editIcon.EditIcon, _envelopeIcon.EnvelopeIcon, _searchIcon.SearchIcon, _successIcon.SuccessIcon, _trashIcon.TrashIcon, _uploadingIcon.UploadingIcon, _warningIcon.WarningIcon, _incognitoIcon.IncognitoIcon];

var styles = {
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 800,
        alignItems: 'center',
        textAlign: 'center',
        margin: '2rem'
    },
    icon: {
        height: 200,
        flex: '0 0 200px'
    },
    name: {
        fontSize: '0.875rem'
    }
};

(0, _react3.storiesOf)('Icons', module).add('Icons', function () {
    return _react2.default.createElement(
        'div',
        { style: styles.wrapper },
        icons.map(function (i) {
            return _react2.default.createElement(
                'div',
                { style: styles.icon, key: i.displayName },
                _react2.default.createElement(i, {
                    height: 72,
                    width: 72
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'pre',
                    { style: styles.name },
                    '<',
                    i.displayName,
                    ' />'
                )
            );
        })
    );
});