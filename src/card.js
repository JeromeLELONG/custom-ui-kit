import styled from 'styled-components';

export const GhostCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.s};
    margin: 0 0 ${({ theme }) => theme.spacing.m} 0;
`;

export const Card = GhostCard.extend`
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
    padding: ${({ theme }) => theme.spacing.s};
    margin: 0 0 ${({ theme }) => theme.spacing.m} 0;
`;

export const PrimaryCard = Card.extend`
    border-left-style: solid;
    border-left-width: ${({ theme }) => theme.spacing.xs};
    border-left-color: ${({ theme }) => theme.colors.red};
`;

export const SecondaryCard = Card.extend`
    border-left-style: solid;
    border-left-width: ${({ theme }) => theme.spacing.xs};
    border-left-color: ${({ theme }) => theme.colors.lightRed};
`;

export const CardTitle = styled.h2`
    margin: 0 0 ${({ theme }) => theme.spacing.s} 0;
    color: ${({ theme }) => theme.colors.black};
`;

export const CardSubTitle = styled.h3`
    margin: 0 0 ${({ theme }) => theme.spacing.s} 0;
    color: ${({ theme }) => theme.colors.black};
`;
