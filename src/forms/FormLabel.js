import styled from 'styled-components';

export const FormLabel = styled.label`
    color: ${({ disabled, hasError, theme }) =>
        hasError
            ? theme.colors.red
            : disabled
                ? theme.colors.warmGrey8c
                : theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.s};
    margin-bottom: ${({ theme }) => theme.spacing.s};
`;

FormLabel.displayName = 'FormLabel';
