import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../src/theme';

export const themeDecorator = stories => (
    <ThemeProvider theme={theme}>{stories()}</ThemeProvider>
);
