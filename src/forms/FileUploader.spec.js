import { shallow } from 'enzyme';
import React from 'react';

import { StyledDropzone, FileUploader } from './FileUploader';
import { Loader } from '../Loader';
import { SuccessIcon } from '../icons';

describe('File Uploader', () => {
    const defaultProps = {
        classes: {},
        label: 'Convention',
        onChange: () => {},
        onUpload: () => Promise.resolve('uploaded.pdf'),
    };

    it('should display error message if dropped file is invalid', () => {
        const props = { ...defaultProps };
        const wrapper = shallow(<FileUploader {...props} />);
        wrapper.find(StyledDropzone).prop('onDrop')(
            [],
            [
                {
                    file: 'wrong.png',
                },
            ],
        );

        expect(wrapper.find('.errorWrapper p').text()).toContain(
            'Seuls les fichiers PDF sont autorisés.',
        );
    });

    it('should display loader when uploading', () => {
        const onUpload = (file, setProgress) => {
            setProgress({ total: 100, loaded: 48 });
            return Promise.resolve('uploaded.pdf');
        };

        const props = { ...defaultProps, onUpload };
        const wrapper = shallow(<FileUploader {...props} />);

        wrapper.find(StyledDropzone).prop('onDrop')([{ file: 'data.csv' }], []);
        expect(wrapper.find(Loader)).toHaveLength(1);
    });

    it('should display success message if upload is done', async () => {
        const onUpload = (file, setProgress) => {
            setProgress(100);
            return Promise.resolve('uploaded.pdf');
        };

        const props = { ...defaultProps, onUpload };
        const wrapper = shallow(<FileUploader {...props} />);

        await wrapper.find(StyledDropzone).prop('onDrop')(
            [{ file: 'data.pdf' }],
            [],
        );
        expect(wrapper.find(SuccessIcon)).toHaveLength(1);
        expect(wrapper.find('.uploadedWrapper p').text()).toContain(
            'Fichier téléchargé avec succès !',
        );
    });

    it('should call `onChange` handler with remote file path once uploaded', async () => {
        const onUpload = () => {
            return Promise.resolve('uploaded.pdf');
        };

        const onChange = jest.fn();

        const props = {
            ...defaultProps,
            onUpload,
            onChange,
        };

        const wrapper = shallow(<FileUploader {...props} />);

        await wrapper.find(StyledDropzone).prop('onDrop')(
            [{ file: 'data.pdf' }],
            [],
        );

        return Promise.resolve().then(() => {
            expect(onChange).toHaveBeenCalledWith('uploaded.pdf');
        });
    });
});
