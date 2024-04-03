import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { CardTitle, GhostCard } from '../../card';
import { HistoryItem } from './history-item';
import { HistoryList } from './history-list';

const stories = storiesOf('Deli - Student', module);
stories.addDecorator(withKnobs);

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

stories.add(
    'History Item - corrected',
    withInfo({ inline: true })(() => (
        <HistoryItem
            ue="UE 533"
            assignment="Devoir 1"
            date="2018-04-16T15:31:44.074Z"
            status="corrected"
            score={18}
        />
    )),
);
stories.add(
    'History',
    withInfo({ inline: true })(() => (
        <Container>
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
    )),
);
