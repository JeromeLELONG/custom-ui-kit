import React from 'react';
import { mount } from 'enzyme';

import { TablePagination } from './Pagination';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

describe('<Pagination />', () => {
    it('should display not display pagination if only one page', () => {
        const props = {
            numberColumns: 4,
            onChange: () => {},
            pageSize: 10,
            pageIndex: 0,
            total: 10,
        };
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <table>
                    <TablePagination {...props} />
                </table>
            </ThemeProvider>,
        );

        expect(wrapper.text()).toContain('');
    });

    it('should display pagination if many pages', () => {
        const props = {
            numberColumns: 4,
            onChange: () => {},
            pageSize: 10,
            pageIndex: 0,
            total: 30,
        };
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <table>
                    <TablePagination {...props} />
                </table>
            </ThemeProvider>,
        );

        expect(wrapper.text()).toContain('1 à 10 sur 30Page 1123');
    });

    it('should display Pagination on page 2 even if page is empty', () => {
        const props = {
            numberColumns: 4,
            onChange: () => {},
            pageSize: 10,
            pageIndex: 1,
            total: 10,
        };
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <table>
                    <TablePagination {...props} />
                </table>
            </ThemeProvider>,
        );

        expect(wrapper.text()).toContain('11 à 10 sur 10Page 21');
    });
});
