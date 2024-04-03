import React from 'react';
import styled from 'styled-components';

import { SecondaryButton } from '../../buttons';
import { HistoryScore } from './history-score';

const HistoryItemContainer = styled.div`
    display: flex;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        & .date {
            color: ${({ theme }) => theme.colors.warmGrey11c};
            font-size: ${({ theme }) => theme.fontSizes.s};
            font-style: italic;
            margin-top: ${({ theme }) => theme.spacing.xxs};
            margin-bottom: ${({ theme }) => theme.spacing.xs};
        }

        & > button + button {
            margin-top: ${({ theme }) => theme.spacing.xxs};
        }
    }
`;

export const HistoryItem = ({ ue, assignment }) => (
    <HistoryItemContainer>
        <div>
            <b>
                {ue} - {assignment}
            </b>
            <div className="date">Rendu le 15/04/2018 à 19:34</div>
            <SecondaryButton>Corrigé</SecondaryButton>
            <SecondaryButton>Commentaires</SecondaryButton>
        </div>
        <HistoryScore score={17} />
    </HistoryItemContainer>
);
