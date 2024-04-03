import React from 'react';
import { format } from 'date-fns';

import { PrimaryButton } from '../../buttons';
import styled from 'styled-components';

const AssignmentContainer = styled.div`
    display: flex;

    & > :first-child {
        flex-grow: 1;
    }

    & > div {
        display: flex;
        flex-direction: column;

        * + span {
            margin-left: 1rem;
        }

        & > * + * {
            margin-top: 0.25rem;

            span {
                font-style: italic;
                font-size: ${({ theme }) => theme.fontSizes.s};

                &.green {
                    color: green;
                }
                &.red {
                    color: red;
                }
            }
        }
    }
`;

export const Assignment = ({ assignment, dueDate, sentDate, ue }) => (
    <AssignmentContainer>
        <div>
            <div>
                <b>{ue}</b> - {assignment}
                <span>A rendre le {format(dueDate, 'DD/MM/YYYY')}</span>
            </div>
            {sentDate && (
                <div>
                    <span className="green">
                        Rendu le {format(sentDate, 'DD/MM/YYYY')} à{' '}
                        {format(dueDate, 'HH:mm')}
                    </span>
                </div>
            )}
        </div>
        <div>
            <PrimaryButton>Déposer</PrimaryButton>
        </div>
    </AssignmentContainer>
);
