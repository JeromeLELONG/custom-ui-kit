import React from 'react';
import { theme } from '../theme';

export const UploadingIcon = props => (
    <svg viewBox="0 0 20 20" {...props}>
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g>
                <path d="M16.8792928,9.09695343 C18.6654343,9.4976045 20,11.09295 20,13 C20,15.209139 18.209139,17 16,17 L5,17 C2.23857625,17 0,14.7614237 0,12 C0,9.58046798 1.71857515,7.56233069 4.00162508,7.09968852 C4.00054449,7.06659179 4,7.03335948 4,7 C4,5.34314575 5.34314575,4 7,4 C7.55384606,4 8.07263826,4.1500834 8.51792503,4.41179863 C9.4182103,3.53797709 10.6462795,3 12,3 C14.7614237,3 17,5.23857625 17,8 C17,8.37684164 16.9583108,8.74394625 16.8792928,9.09695343 Z M10,7 L14,11 L6,11 L10,7 Z M9,11 L11,11 L11,14 L9,14 L9,11 Z" />
            </g>
        </g>
    </svg>
);

UploadingIcon.defaultProps = {
    width: 16,
    height: 16,
    fill: theme.colors.blue,
};

UploadingIcon.displayName = 'UploadingIcon';
