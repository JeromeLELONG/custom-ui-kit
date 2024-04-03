'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _addonKnobs = require('@storybook/addon-knobs');

var _react = require('@storybook/react');

var _react2 = require('react');

var React = _interopRequireWildcard(_react2);

var _ = require('.');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stories = (0, _react.storiesOf)('Table', module);

var data = [{
    name: 'MARTIN Jean',
    company: 'Orange',
    duration: '6 mois',
    date: '01/09/2018',
    state: 'Validation pédagogique'
}, {
    name: 'DUPOND Nicolas',
    company: 'EDF',
    duration: '3 mois',
    date: '01/09/2018',
    state: 'Validation administrative'
}, {
    name: 'BERNARD Jean',
    company: 'Marmelab',
    duration: '2 semaines',
    date: '04/09/2018',
    state: 'Validation administrative'
}, {
    name: 'ROBERT Maxime',
    company: 'Harmonie',
    duration: '3 jours',
    date: '11/09/2018',
    state: 'Signature entreprise'
}, {
    name: 'LEROY Marcel',
    company: 'Saint Gobain',
    duration: '3 jours',
    date: '26/09/2018',
    state: 'Validé'
}];

stories.add('Default Table', function () {
    return React.createElement(
        _.Table,
        null,
        React.createElement(
            'thead',
            null,
            React.createElement(
                'tr',
                null,
                React.createElement(
                    'th',
                    null,
                    'Auditeur'
                ),
                React.createElement(
                    'th',
                    null,
                    'Entreprise'
                ),
                React.createElement(
                    'th',
                    null,
                    'Dur\xE9e'
                ),
                React.createElement(
                    'th',
                    null,
                    'Date de la demande'
                ),
                React.createElement(
                    'th',
                    null,
                    '\xC9tat'
                )
            )
        ),
        React.createElement(
            'tbody',
            null,
            data.map(function (d) {
                return React.createElement(
                    'tr',
                    { key: d.name },
                    React.createElement(
                        'td',
                        null,
                        d.name
                    ),
                    React.createElement(
                        'td',
                        null,
                        d.company
                    ),
                    React.createElement(
                        'td',
                        null,
                        d.duration
                    ),
                    React.createElement(
                        'td',
                        null,
                        d.date
                    ),
                    React.createElement(
                        'td',
                        null,
                        d.state
                    )
                );
            })
        )
    );
}).add('Condensed Table', function () {
    return React.createElement(
        _.Table,
        { condensed: true },
        React.createElement(
            'thead',
            null,
            React.createElement(
                'tr',
                null,
                React.createElement(
                    'th',
                    null,
                    'Auditeur'
                ),
                React.createElement(
                    'th',
                    null,
                    'Entreprise'
                ),
                React.createElement(
                    'th',
                    null,
                    'Dur\xE9e'
                ),
                React.createElement(
                    'th',
                    null,
                    'Date de la demande'
                ),
                React.createElement(
                    'th',
                    null,
                    '\xC9tat'
                )
            )
        ),
        React.createElement(
            'tbody',
            null,
            data.map(function (d) {
                return React.createElement(
                    'tr',
                    { key: d.name },
                    React.createElement(
                        'td',
                        null,
                        d.name
                    ),
                    React.createElement(
                        'td',
                        null,
                        d.company
                    ),
                    React.createElement(
                        'td',
                        null,
                        d.duration
                    ),
                    React.createElement(
                        'td',
                        null,
                        d.date
                    ),
                    React.createElement(
                        'td',
                        null,
                        d.state
                    )
                );
            })
        )
    );
}).add('Table Pagination', function () {
    return React.createElement(
        _.Table,
        null,
        React.createElement(
            'thead',
            null,
            React.createElement(
                'tr',
                null,
                React.createElement(
                    'th',
                    null,
                    'Auditeur'
                ),
                React.createElement(
                    'th',
                    null,
                    'Entreprise'
                ),
                React.createElement(
                    'th',
                    null,
                    'Dur\xE9e'
                ),
                React.createElement(
                    'th',
                    null,
                    'Date de la demande'
                ),
                React.createElement(
                    'th',
                    null,
                    '\xC9tat'
                )
            )
        ),
        React.createElement(
            'tbody',
            null,
            React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    { colSpan: '5', style: { textAlign: 'center' } },
                    React.createElement(
                        'i',
                        null,
                        '/* Your data here */'
                    )
                )
            )
        ),
        React.createElement(_.TablePagination, {
            numberColumns: 5,
            onChange: function onChange() {},
            pageSize: (0, _addonKnobs.number)('Page size', 2),
            total: (0, _addonKnobs.number)('Number of records', 287),
            pageIndex: 1
        })
    );
}).add('Table Sortable Header', function () {
    var data = [{ attendee: 'MARTIN Jean', company: 'Orange', duration: '6 mois' }, { attendee: 'DUPOND Nicolas', company: 'EDF', duration: '3 mois' }, {
        attendee: 'BERNARD Jean',
        company: 'marmelab',
        duration: '1 mois'
    }];

    var SortableTable = function (_React$Component) {
        _inherits(SortableTable, _React$Component);

        function SortableTable() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, SortableTable);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SortableTable.__proto__ || Object.getPrototypeOf(SortableTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                orderBy: 'attendee',
                order: 'ASC'
            }, _this.getOrder = function (columnName) {
                if (_this.state.orderBy === columnName) {
                    return _this.state.order;
                }

                return null;
            }, _this.onChangeOder = function (columnName) {
                return function (newOrder) {
                    _this.setState({
                        orderBy: columnName,
                        order: newOrder
                    });
                };
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(SortableTable, [{
            key: 'render',
            value: function render() {
                var _state = this.state,
                    order = _state.order,
                    orderBy = _state.orderBy;

                data.sort(function (a, b) {
                    return (a[orderBy] > b[orderBy] ? -1 : 1) * (order === 'DESC' ? 1 : -1);
                });

                return React.createElement(
                    _.Table,
                    null,
                    React.createElement(
                        'thead',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                _.SortableHeader,
                                {
                                    order: this.getOrder('attendee'),
                                    onChange: this.onChangeOder('attendee')
                                },
                                'Auditeur'
                            ),
                            React.createElement(
                                _.SortableHeader,
                                {
                                    order: this.getOrder('company'),
                                    onChange: this.onChangeOder('company')
                                },
                                'Entreprise'
                            ),
                            React.createElement(
                                _.SortableHeader,
                                {
                                    order: this.getOrder('duration'),
                                    onChange: this.onChangeOder('duration')
                                },
                                'Dur\xE9e'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        data.map(function (d) {
                            return React.createElement(
                                'tr',
                                { key: d.attendee },
                                React.createElement(
                                    'td',
                                    null,
                                    d.attendee
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    d.company
                                ),
                                React.createElement(
                                    'td',
                                    null,
                                    d.duration
                                )
                            );
                        })
                    )
                );
            }
        }]);

        return SortableTable;
    }(React.Component);

    return React.createElement(SortableTable, null);
});