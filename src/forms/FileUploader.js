import React from 'react';
import PropTypes from 'prop-types';

import Dropzone from 'react-dropzone';
import classnames from 'classnames';
import styled from 'styled-components';
import { Loader } from '../Loader';
import { UploadingIcon, SuccessIcon, WarningIcon } from '../icons';

export const StyledDropzone = styled(Dropzone)`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `2px solid ${theme.colors.lightBlue}`};
    transition: all 0.125s ease-in-out;
    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.lightGrey};
        border-color: ${({ theme }) => theme.colors.blue};
    }
    padding: 3rem 2rem;
    max-width: 500px;
    & p {
        color: ${({ theme }) => theme.colors.grey};
    }

    &:hover .uploadWrapper {
        opacity: 1;
    }

    &.erred {
        background: ${({ theme }) => theme.colors.lightRed};
        border: ${({ theme }) => `2px solid ${theme.colors.red}`};
    }

    &.droppable {
        border: ${({ theme }) => `2px solid ${theme.colors.red}`};
        & .uploadWrapper {
            opacity: 1;
        }
    }

    .uploadable {
        cursor: pointer;
        &:hover {
            border: ${({ theme }) => `2px solid ${theme.colors.lightBlue}`};
        }
    }

    .label {
        margin-bottom: '0.25rem';
    }

    .uploading: {
        cursor: progress;
        &:hover {
            border: 0;
        }
    }

    .wrapper {
        text-align: center;
        width: 100%;

        > * {
            height: 69px;
        }

        .step-label {
            height: 24px;
        }
    }

    .fileWrapper: {
        width: 100%;
        padding: 2rem;
    }

    .uploadWrapper: {
        transition: opacity 0.125s ease-in-out;
        opacity: 0.5;
    }

    .errorIcon {
        color: ${({ theme }) => theme.colors.redLight};
        font-size: 5rem;
    }

    .icon: {
        font-size: '5rem',
        color: ${({ theme }) => theme.colors.grayLight};
    }

    .uploadedIcon: {
        font-size: 5rem;
        color: ${({ theme }) => theme.colors.green};
    }

    .loader {
        margin-top: 1rem;
    }
`;

export const STATE_INITIAL = 'initial';
export const STATE_ERROR = 'error';
export const STATE_UPLOADING = 'uploading';
export const STATE_SUCCESS = 'success';

export class FileUploader extends React.Component {
    state = {
        error: null,
        uploadState: STATE_INITIAL,
        progress: 0,
    };

    static propTypes = {
        onUpload: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        maxSize: PropTypes.number,
    };

    static defaultProps = {
        maxSize: 1e6,
    };

    handleUploadProgress = progressEvent => {
        const progress = Math.round(
            progressEvent.loaded * 100 / progressEvent.total,
        );

        if (progress >= 100) {
            this.setState({
                progress: 100,
                uploadState: STATE_SUCCESS,
            });
        } else {
            this.setState({ progress });
        }
    };

    handleUpload = (files, rejectedFiles) => {
        if (rejectedFiles && rejectedFiles.length !== 0) {
            if (rejectedFiles[0].size > this.props.maxSize) {
                return this.setState({
                    uploadState: STATE_ERROR,
                    error: `Fichier trop lourd (maximum ${this.props.maxSize /
                        1000000} Mo)`,
                });
            }

            return this.setState({
                uploadState: STATE_ERROR,
                error: 'Seuls les fichiers PDF sont autorisés.',
            });
        }

        const data = new FormData();
        data.append('pdf', files[0]);

        this.setState({
            uploadState: STATE_UPLOADING,
            fileName: files[0].name,
            error: null,
        });

        return this.props
            .onUpload(data, this.handleUploadProgress)
            .then(fileName => {
                this.setState({ uploadState: STATE_SUCCESS });
                this.props.onChange(fileName);

                return fileName;
            })
            .catch(err =>
                new Promise(resolve => {
                    let message = "Une erreur s'est produite lors de l'envoi.";

                    if (err.response) {
                        return err.response
                            .json()
                            .then(({ error }) => resolve(error));
                    }

                    return resolve(message);
                }).then(message => {
                    this.setState({
                        error: message,
                        uploadState: STATE_ERROR,
                    });
                }),
            );
    };

    renderContent = () => {
        const { error, fileName } = this.state;
        const { placeholder } = this.props;

        switch (this.state.uploadState) {
            case STATE_SUCCESS:
                return (
                    <div className="wrapper uploadedWrapper">
                        <div>
                            <SuccessIcon width={48} height={48} />
                        </div>
                        <p className="step-label">
                            Fichier téléchargé avec succès !
                        </p>
                    </div>
                );

            case STATE_ERROR:
                return (
                    <div className="wrapper errorWrapper">
                        <div>
                            <WarningIcon width={64} height={64} />
                        </div>
                        <p className="step-label">{error}</p>
                    </div>
                );

            case STATE_UPLOADING:
                return (
                    <div className="wrapper fileWrapper">
                        <div>
                            <Loader size={48} />
                        </div>
                        <p className="step-label">{fileName}</p>
                    </div>
                );
        }

        return (
            <div className="wrapper uploadWrapper">
                <div>
                    <UploadingIcon width={64} height={64} />
                </div>
                <p className="step-label">{placeholder}</p>
            </div>
        );
    };

    render() {
        const { uploadState } = this.state;
        const { onUpload, ...otherProps } = this.props;

        return (
            <StyledDropzone
                className={classnames({
                    dropzone: true,
                    uploading: uploadState === STATE_UPLOADING,
                    erred: uploadState === STATE_ERROR,
                })}
                disablePreview
                activeClassName="droppable"
                onDrop={this.handleUpload}
                {...otherProps}
            >
                {this.renderContent()}
            </StyledDropzone>
        );
    }
}
