import React from 'react';
import styled from 'styled-components';

const HistoryScoreContainer = styled.div`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: ${({ theme }) => theme.spacing.s};
    background-color: ${({ theme }) => theme.colors.lightRed};
    border-radius: 50%;
    height: 5rem;
    width: 5rem;

    span:first-child {
        font-size: ${({ theme }) => theme.fontSizes.l};
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: ${({ theme }) => theme.colors.black};
        margin-bottom: ${({ theme }) => theme.fontSizes.xxs};
    }

    span:last-child {
        font-size: ${({ theme }) => theme.fontSizes.s};
    }
`;

export const HistoryScore = ({ score }) => (
    <HistoryScoreContainer>
        <span>{score}</span>
        <span>20</span>
    </HistoryScoreContainer>
);
