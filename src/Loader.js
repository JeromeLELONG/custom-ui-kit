import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { theme } from './theme';

export const Loader = props => <ClipLoader color={theme.active} {...props} />;
