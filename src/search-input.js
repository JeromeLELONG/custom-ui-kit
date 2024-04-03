import React from 'react';
import styled from 'styled-components';

import { GhostButton } from './buttons';
import { CrossIcon } from './icons';
import { Input as InputBase } from './forms/Input';

const Input = styled(InputBase)`
    background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%09%09%09%09%09%09%0D%0A%09%09%09%09%09%09%3Cg%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0D%0A%09%09%09%09%09%09%09%3Cg%20fill%3D%22%23aa9f97%22%3E%0D%0A%09%09%09%09%09%09%09%09%3Cpath%20d%3D%22M12.9056439%2C14.3198574%20C11.5509601%2C15.3729184%209.84871145%2C16%208%2C16%20C3.581722%2C16%200%2C12.418278%200%2C8%20C0%2C3.581722%203.581722%2C0%208%2C0%20C12.418278%2C0%2016%2C3.581722%2016%2C8%20C16%2C9.84871145%2015.3729184%2C11.5509601%2014.3198574%2C12.9056439%20L19.6568542%2C18.2426407%20L18.2426407%2C19.6568542%20L12.9056439%2C14.3198574%20Z%20M8%2C14%20C11.3137085%2C14%2014%2C11.3137085%2014%2C8%20C14%2C4.6862915%2011.3137085%2C2%208%2C2%20C4.6862915%2C2%202%2C4.6862915%202%2C8%20C2%2C11.3137085%204.6862915%2C14%208%2C14%20Z%22%3E%3C%2Fpath%3E%0D%0A%09%09%09%09%09%09%09%3C%2Fg%3E%0D%0A%09%09%09%09%09%09%3C%2Fg%3E%3C%2Fsvg%3E');
    background-position: ${({ theme }) => theme.spacing.xs};
    background-repeat: no-repeat;
    background-size: auto 60%;
    padding-left: ${({ theme }) => theme.spacing.l};

    &:focus {
        background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%09%09%09%09%09%09%0D%0A%09%09%09%09%09%09%3Cg%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0D%0A%09%09%09%09%09%09%09%3Cg%20fill%3D%22%23aa9f97%22%3E%0D%0A%09%09%09%09%09%09%09%09%3Cpath%20d%3D%22M12.9056439%2C14.3198574%20C11.5509601%2C15.3729184%209.84871145%2C16%208%2C16%20C3.581722%2C16%200%2C12.418278%200%2C8%20C0%2C3.581722%203.581722%2C0%208%2C0%20C12.418278%2C0%2016%2C3.581722%2016%2C8%20C16%2C9.84871145%2015.3729184%2C11.5509601%2014.3198574%2C12.9056439%20L19.6568542%2C18.2426407%20L18.2426407%2C19.6568542%20L12.9056439%2C14.3198574%20Z%20M8%2C14%20C11.3137085%2C14%2014%2C11.3137085%2014%2C8%20C14%2C4.6862915%2011.3137085%2C2%208%2C2%20C4.6862915%2C2%202%2C4.6862915%202%2C8%20C2%2C11.3137085%204.6862915%2C14%208%2C14%20Z%22%3E%3C%2Fpath%3E%0D%0A%09%09%09%09%09%09%09%3C%2Fg%3E%0D%0A%09%09%09%09%09%09%3C%2Fg%3E%3C%2Fsvg%3E');
        background-position: ${({ theme }) => theme.spacing.xs};
        background-repeat: no-repeat;
        background-size: auto 60%;
    }
`;

const InputContainer = styled.div`
    position: relative;
`;

const ClearButton = GhostButton.extend`
    position: absolute;
    right: 0;
    top: ${({ theme }) => theme.spacing.xxs};
`;

export const SearchInput = ({ onChange, ...props }) => (
    <InputContainer>
        <Input {...props} onChange={event => onChange(event.target.value)} />
        <ClearButton aria-label="Remettre à zéro" onClick={() => onChange('')}>
            <CrossIcon />
        </ClearButton>
    </InputContainer>
);

SearchInput.displayName = 'SearchInput';
