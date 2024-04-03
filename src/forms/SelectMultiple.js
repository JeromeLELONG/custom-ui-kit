import { darken } from 'polished';
import React from 'react';
import Select from 'react-select';

import { theme } from '../theme';

const customTheme = defaultTheme => ({
    ...defaultTheme,
    borderRadius: theme.spacing.xxs,
    colors: {
        ...defaultTheme.colors,
        neutral0: theme.colors.lightGrey,
        primary: darken(0.6, theme.colors.lightGrey),
        primary75: darken(0.4, theme.colors.lightGrey),
        primary50: darken(0.2, theme.colors.lightGrey),
        primary25: darken(0.2, theme.colors.lightGrey),
        danger: theme.colors.primaryRed,
        dangerLight: theme.colors.red,
    },
    spacing: {
        ...defaultTheme.spacing,
        baseUnit: theme.spaceBase * 2.5,
    },
});

const styles = { container: provided => ({ ...provided, font: theme.fonts.copy }) };

export const SelectMultiple = props => <Select theme={customTheme} styles={styles} {...props} />;

SelectMultiple.defaultProps = {
    isMulti: true,
};
