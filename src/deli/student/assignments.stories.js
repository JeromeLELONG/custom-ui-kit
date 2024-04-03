import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import {
    CardSubTitle,
    CardTitle,
    PrimaryCard,
    SecondaryCard,
} from '../../card';
import { Assignment } from './assignment';
import { AssignmentList } from './assignment-list';

const stories = storiesOf('Deli - Student', module);
stories.addDecorator(withKnobs);

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

stories.add(
    'Assignment - due',
    withInfo({ inline: true })(() => (
        <Assignment ue="UE 532" assignment="Devoir 2" dueDate="2018-04-18" />
    )),
);
stories.add(
    'Assignment - sent',
    withInfo({ inline: true })(() => (
        <Assignment
            ue="UE 532"
            assignment="Devoir 2"
            dueDate="2018-04-18"
            sentDate="2018-06-10T08:17:28.970Z"
        />
    )),
);
stories.add(
    'Assignments',
    withInfo({ inline: true })(() => (
        <Container>
            <PrimaryCard>
                <CardTitle>Devoirs à rendre</CardTitle>
                <CardSubTitle>Echéances passées</CardSubTitle>
                <AssignmentList>
                    <li>
                        <Assignment
                            ue="UE 532"
                            assignment="Devoir 2"
                            dueDate="2018-04-18"
                        />
                    </li>
                    <li>
                        <Assignment
                            ue="UE 533"
                            assignment="Devoir 2"
                            dueDate="2018-04-18"
                        />
                    </li>
                </AssignmentList>
                <CardSubTitle>Prochaines échéances</CardSubTitle>
                <AssignmentList>
                    <li>
                        <Assignment
                            ue="UE 532"
                            assignment="Devoir 3"
                            dueDate="2018-06-18"
                        />
                    </li>
                    <li>
                        <Assignment
                            ue="UE 533"
                            assignment="Devoir 3"
                            dueDate="2018-06-18"
                        />
                    </li>
                    <li>
                        <Assignment
                            ue="UE 534"
                            assignment="Devoir 3"
                            dueDate="2018-06-18"
                            sentDate="2018-06-10T08:17:28.970Z"
                        />
                    </li>
                </AssignmentList>
            </PrimaryCard>
            <SecondaryCard>
                <CardTitle>A venir</CardTitle>
                <AssignmentList>
                    <li>
                        <Assignment
                            ue="UE 532"
                            assignment="Devoir 1"
                            dueDate="2018-11-18"
                        />
                    </li>
                    <li>
                        <Assignment
                            ue="UE 533"
                            assignment="Devoir 1"
                            dueDate="2018-11-18"
                        />
                    </li>
                    <li>
                        <Assignment
                            ue="UE 534"
                            assignment="Devoir 1"
                            dueDate="2018-11-18"
                        />
                    </li>
                </AssignmentList>
            </SecondaryCard>
        </Container>
    )),
);
