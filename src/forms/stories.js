import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Input } from './Input';
import { Select } from './Select';
import { TextArea } from './Textarea';
import { LimitedTextArea } from './LimitedTextArea';
import { DatePicker } from './DatePicker';
import { FileUploader } from './FileUploader';
import { RangeSelector } from './RangeSelector';
import { SelectMultiple } from './SelectMultiple';

const stories = storiesOf('Forms', module);
stories.addDecorator(withKnobs);

const options = [
    {
        value: 'admin',
        label: 'Administrator',
    },
    {
        value: 'editor',
        label: 'Editor',
    },
    {
        value: 'animator',
        label: 'Animator',
    },
];

stories
    .add('Text Input', withInfo()(() => <Input />))
    .add(
        'Select List',
        withInfo()(() => (
            <Select>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        )),
    )
    .add('Select Multiple', () => (
        <SelectMultiple options={options} defaultValue={[options[0]]} onChange={action('onChange')} />
    ))
    .add(
        'File Uploader',
        withInfo({
            propTables: [],
        })(() => {
            const onUpload = (file, onProgress) => {
                let progress = 0;

                return new Promise(resolve => {
                    const nextStep = () =>
                        setTimeout(() => {
                            progress = Math.min(progress + Math.random(0, 1) * 10, 100);
                            onProgress({
                                loaded: progress,
                                total: 100,
                            });

                            if (progress === 100) {
                                return resolve('uploaded/file.csv');
                            } else {
                                nextStep();
                            }
                        }, 100);

                    return nextStep();
                });
            };

            return (
                <FileUploader
                    name="data"
                    placeholder="Téléchargez votre convention (fichiers PDF uniquement)"
                    onUpload={onUpload}
                    onChange={() => {}}
                />
            );
        }),
    )
    .add('Textarea', withInfo()(() => <TextArea />))
    .add(
        'Limited Textarea',
        withInfo({
            propTables: [],
        })(() => (
            <div>
                <p>Value will be limited in length outside of the storybook when used in a real form.</p>
                <LimitedTextArea onChange={jest.fn()} limit={300} />
            </div>
        )),
    )
    .add('Date Picker', () => {
        class DatePickerWithValue extends React.Component {
            state = {
                value: null,
            };

            onChange = e => {
                this.setState({ value: e.target.value });
            };

            render() {
                return <DatePicker onChange={this.onChange} value={this.state.value} />;
            }
        }

        return <DatePickerWithValue />;
    })
    .add('RangeSelector', () => {
        class RangeSelectorWithValue extends React.Component {
            state = {
                lowerBound: 'a',
                upperBound: '',
            };

            onChange = e => {
                this.setState({
                    lowerBound: e.lowerBound,
                    upperBound: e.upperBound,
                });
            };

            render() {
                return <RangeSelector label="Filtres :" size={5} separator="→" onChange={this.onChange} />;
            }
        }

        return (
            <div style={{ width: 300 }}>
                <RangeSelectorWithValue />
            </div>
        );
    });
