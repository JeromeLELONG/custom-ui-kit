import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import * as React from 'react';

import { Table, TablePagination, SortableHeader } from '.';

const stories = storiesOf('Table', module);

const data = [
    {
        name: 'MARTIN Jean',
        company: 'Orange',
        duration: '6 mois',
        date: '01/09/2018',
        state: 'Validation pédagogique',
    },
    {
        name: 'DUPOND Nicolas',
        company: 'EDF',
        duration: '3 mois',
        date: '01/09/2018',
        state: 'Validation administrative',
    },
    {
        name: 'BERNARD Jean',
        company: 'Marmelab',
        duration: '2 semaines',
        date: '04/09/2018',
        state: 'Validation administrative',
    },
    {
        name: 'ROBERT Maxime',
        company: 'Harmonie',
        duration: '3 jours',
        date: '11/09/2018',
        state: 'Signature entreprise',
    },
    {
        name: 'LEROY Marcel',
        company: 'Saint Gobain',
        duration: '3 jours',
        date: '26/09/2018',
        state: 'Validé',
    },
];

stories
    .add('Default Table', () => (
        <Table>
            <thead>
                <tr>
                    <th>Auditeur</th>
                    <th>Entreprise</th>
                    <th>Durée</th>
                    <th>Date de la demande</th>
                    <th>État</th>
                </tr>
            </thead>
            <tbody>
                {data.map(d => (
                    <tr key={d.name}>
                        <td>{d.name}</td>
                        <td>{d.company}</td>
                        <td>{d.duration}</td>
                        <td>{d.date}</td>
                        <td>{d.state}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    ))
    .add('Condensed Table', () => (
        <Table condensed>
            <thead>
                <tr>
                    <th>Auditeur</th>
                    <th>Entreprise</th>
                    <th>Durée</th>
                    <th>Date de la demande</th>
                    <th>État</th>
                </tr>
            </thead>
            <tbody>
                {data.map(d => (
                    <tr key={d.name}>
                        <td>{d.name}</td>
                        <td>{d.company}</td>
                        <td>{d.duration}</td>
                        <td>{d.date}</td>
                        <td>{d.state}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    ))
    .add('Table Pagination', () => (
        <Table>
            <thead>
                <tr>
                    <th>Auditeur</th>
                    <th>Entreprise</th>
                    <th>Durée</th>
                    <th>Date de la demande</th>
                    <th>État</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan="5" style={{ textAlign: 'center' }}>
                        <i>/* Your data here */</i>
                    </td>
                </tr>
            </tbody>
            <TablePagination
                numberColumns={5}
                onChange={() => {}}
                pageSize={number('Page size', 2)}
                total={number('Number of records', 287)}
                pageIndex={1}
            />
        </Table>
    ))
    .add('Table Sortable Header', () => {
        const data = [
            { attendee: 'MARTIN Jean', company: 'Orange', duration: '6 mois' },
            { attendee: 'DUPOND Nicolas', company: 'EDF', duration: '3 mois' },
            {
                attendee: 'BERNARD Jean',
                company: 'marmelab',
                duration: '1 mois',
            },
        ];

        class SortableTable extends React.Component {
            state = {
                orderBy: 'attendee',
                order: 'ASC',
            };

            getOrder = columnName => {
                if (this.state.orderBy === columnName) {
                    return this.state.order;
                }

                return null;
            };

            onChangeOder = columnName => newOrder => {
                this.setState({
                    orderBy: columnName,
                    order: newOrder,
                });
            };

            render() {
                const { order, orderBy } = this.state;
                data.sort((a, b) => (a[orderBy] > b[orderBy] ? -1 : 1) * (order === 'DESC' ? 1 : -1));

                return (
                    <Table>
                        <thead>
                            <tr>
                                <SortableHeader
                                    order={this.getOrder('attendee')}
                                    onChange={this.onChangeOder('attendee')}
                                >
                                    Auditeur
                                </SortableHeader>
                                <SortableHeader
                                    order={this.getOrder('company')}
                                    onChange={this.onChangeOder('company')}
                                >
                                    Entreprise
                                </SortableHeader>
                                <SortableHeader
                                    order={this.getOrder('duration')}
                                    onChange={this.onChangeOder('duration')}
                                >
                                    Durée
                                </SortableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(d => (
                                <tr key={d.attendee}>
                                    <td>{d.attendee}</td>
                                    <td>{d.company}</td>
                                    <td>{d.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                );
            }
        }

        return <SortableTable />;
    });
