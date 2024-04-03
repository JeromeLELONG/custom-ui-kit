import React from 'react';
import { storiesOf } from '@storybook/react';

import { ArrowDownIcon } from './arrow-down-icon';
import { ArrowUpIcon } from './arrow-up-icon';
import { CalendarIcon } from './calendar-icon';
import { CrossIcon } from './cross-icon';
import { DownloadIcon } from './download-icon';
import { EditIcon } from './edit-icon';
import { EnvelopeIcon } from './envelope-icon';
import { SearchIcon } from './search-icon';
import { SuccessIcon } from './success-icon';
import { TrashIcon } from './trash-icon';
import { UploadingIcon } from './uploading-icon';
import { WarningIcon } from './warning-icon';
import { ArrowLeftIcon } from './arrow-left-icon';
import { ArrowRightIcon } from './arrow-right-icon';
import { IncognitoIcon } from './incognito-icon';

const icons = [
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowUpIcon,
    ArrowRightIcon,
    CalendarIcon,
    CrossIcon,
    DownloadIcon,
    EditIcon,
    EnvelopeIcon,
    SearchIcon,
    SuccessIcon,
    TrashIcon,
    UploadingIcon,
    WarningIcon,
    IncognitoIcon,
];

const styles = {
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 800,
        alignItems: 'center',
        textAlign: 'center',
        margin: '2rem',
    },
    icon: {
        height: 200,
        flex: '0 0 200px',
    },
    name: {
        fontSize: '0.875rem',
    },
};

storiesOf('Icons', module).add('Icons', () => (
    <div style={styles.wrapper}>
        {icons.map(i => (
            <div style={styles.icon} key={i.displayName}>
                {React.createElement(i, {
                    height: 72,
                    width: 72,
                })}
                <br />
                <pre style={styles.name}>&lt;{i.displayName} /&gt;</pre>
            </div>
        ))}
    </div>
));
