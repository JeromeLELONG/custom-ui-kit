import { ErrorMessage } from '../error-message';

export const FormErrorMessage = ErrorMessage.extend`
    margin-top: ${({ theme }) => theme.spacing.xs};
`;

FormErrorMessage.displayName = 'FormErrorMessage';
