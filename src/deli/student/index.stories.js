import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';

import {
    CardSubTitle,
    CardTitle,
    GhostCard,
    PrimaryCard,
    SecondaryCard,
} from '../../card';
import { Title } from '../../title';
import { Assignment } from './assignment';
import { AssignmentList } from './assignment-list';
import { HistoryItem } from './history-item';
import { HistoryList } from './history-list';

const stories = storiesOf('Deli - Student', module);
stories.addDecorator(withKnobs);

const Container = styled.div`
    display: flex;
    justify-content: center;

    & > div {
        display: flex;
        flex-direction: column;
    }

    & > :last-child {
        margin-left: 2rem;
    }
    & > :first-child {
        flex-basis: 60%;
    }
`;

stories.add(
    'Home',
    withInfo({ inline: true })(() => (
        <React.Fragment>
            <Title>bonjour Marcel,</Title>
            <Container>
                <div>
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
                </div>
                <GhostCard>
                    <CardTitle>Devoirs rendus</CardTitle>
                    <HistoryList>
                        <li>
                            <HistoryItem
                                ue="UE 533"
                                assignment="Devoir 1"
                                date="2018-04-16T15:31:44.074Z"
                                status="corrected"
                                score={18}
                            />
                        </li>
                        <li>
                            <HistoryItem
                                ue="UE 532"
                                assignment="Devoir 1"
                                date="2018-04-16T19:31:44.074Z"
                                status="corrected"
                                score={12}
                            />
                        </li>
                        <li>
                            <HistoryItem
                                ue="UE 535"
                                assignment="Devoir 1"
                                date="2018-04-13T14:25:44.074Z"
                                status="corrected"
                                score={6}
                            />
                        </li>
                        <li>
                            <HistoryItem
                                ue="UE 536"
                                assignment="Devoir 1"
                                date="2018-03-11T09:15:44.074Z"
                                status="corrected"
                                score={11}
                            />
                        </li>
                    </HistoryList>
                </GhostCard>
            </Container>
        </React.Fragment>
    )),
);
