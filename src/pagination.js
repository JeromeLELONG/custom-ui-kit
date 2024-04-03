import { Component } from 'react';
import PropTypes from 'prop-types';

export class Pagination extends Component {
    static propTypes = {
        children: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        pageIndex: PropTypes.number,
        pageSize: PropTypes.number,
        total: PropTypes.number,
    };

    state = { pageIndex: 0, pageSize: 20, total: 1, maxPageIndex: 1 };

    static getDerivedStateFromProps(nextProps, prevState) {
        let state = {};

        if (nextProps.total !== prevState.total) {
            state.total = nextProps.total;
        }

        if (nextProps.pageIndex !== prevState.pageIndex) {
            state.pageIndex = nextProps.pageIndex;
        }

        if (nextProps.pageSize !== prevState.pageSize) {
            state.pageSize = nextProps.pageSize;
        }

        const maxPageIndex = Math.ceil(nextProps.total / nextProps.pageSize);

        if (maxPageIndex !== prevState.maxPageIndex) {
            state.maxPageIndex = maxPageIndex;
        }

        return state;
    }

    handleGoToNextPage = () => {
        const { maxPageIndex, pageIndex, pageSize } = this.state;
        const { onChange } = this.props;

        if (pageIndex < maxPageIndex) {
            onChange({
                pageIndex: pageIndex + 1,
                pageSize,
            });
        }
    };

    handleGoToPage = page => {
        const { maxPageIndex, pageIndex, pageSize } = this.state;
        const { onChange } = this.props;

        if (page !== pageIndex && (page >= 0 || page < maxPageIndex)) {
            onChange({
                pageIndex: page,
                pageSize,
            });
        }
    };

    handleGoToPreviousPage = () => {
        const { pageIndex, pageSize } = this.state;
        const { onChange } = this.props;

        if (pageIndex > 0) {
            onChange({
                pageIndex: pageIndex - 1,
                pageSize,
            });
        }
    };

    handleGoToFirstPage = () => {
        const { pageSize } = this.state;
        const { onChange } = this.props;

        onChange({
            pageIndex: 0,
            pageSize,
        });
    };

    handleGoToLastPage = () => {
        const { maxPageIndex, pageSize } = this.state;
        const { onChange } = this.props;

        onChange({
            pageIndex: maxPageIndex - 1,
            pageSize,
        });
    };

    render() {
        const { maxPageIndex, pageIndex, pageSize, total } = this.state;
        const { children } = this.props;

        return children({
            canGoToNextPage: pageIndex < maxPageIndex,
            goToFirstPage: this.handleGoToFirstPage,
            goToLastPage: this.handleGoToLastPage,
            goToNextPage: this.handleGoToNextPage,
            goToPage: this.handleGoToPage,
            goToPreviousPage: this.handleGoToPreviousPage,
            maxPageIndex,
            pageIndex,
            pageSize,
            total,
        });
    }
}
