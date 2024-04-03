import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { Background } from './Background';
import { MaxWidthContainer } from './MaxWidthContainer';
import { Footer } from './Footer';
import { Breadcrumb } from './Breadcrumb';
import { A } from '../A';
import { Header, AppHeaderLink, HeaderCartridge } from './header';
import { Button } from '../buttons';
import { SuccessIcon } from '../icons';

const stories = storiesOf('Layout', module);
stories.addDecorator(withKnobs);

stories
    .add(
        'Background',
        withInfo({
            text: 'Page background, displayed below this content box.',
        })(() => <Background />),
    )
    .add(
        'Breadcrumb',
        withInfo()(() => (
            <Breadcrumb
                items={[
                    { label: 'Home', path: '/' },
                    { label: 'Category', path: '/category' },
                    { label: 'Article', path: '/category/article' },
                ]}
                link={({ label, path }) => <A href={path}>{label}</A>}
                lastItem={({ label }) => <span>{label}</span>}
            />
        )),
    )
    .add(
        'Max Width Container',
        withInfo({
            text:
                'All the children of this component are limited in width.' +
                'Either resize the window or check the "Viewport" tab below to test on another resolutions.',
        })(() => (
            <MaxWidthContainer>
                <div style={{ background: '#fff', margin: '2rem', padding: '2rem' }}>
                    <h1>Hello world!</h1>
                </div>
            </MaxWidthContainer>
        )),
    )
    .add('Header (no logged user)', () => <Header />)
    .add('Header (with logged user) [deprecated API]', () => (
        <Header
            user={{
                logoutUrl: '#logout',
                name: 'John Doe',
                profile: 'Student',
            }}
        />
    ))
    .add('Header (with logged user)', () => (
        <Header logoutUrl="#logout" userInformation={`${'John Doe'} (${'Student'})`} />
    ))
    .add('Header (with logged user and custom title)', () => (
        <Header
            logoutUrl="#logout"
            title={<h1>This is the title</h1>}
            userInformation={`${'John Doe'} (${'Student'})`}
        />
    ))
    .add('Header (with title only)', () => <Header title={'This is the title'} />)
    .add('Header (with logged user and additional action)', () => (
        <Header
            logoutUrl="#logout"
            userInformation={`${'John Doe'} (${'Student'})`}
            additionalAction={
                <AppHeaderLink href="" title="contact">
                    Contacts
                </AppHeaderLink>
            }
        />
    ))
    .add('Header (with logged user and cartridge)', () => (
        <Header
            logoutUrl="#logout"
            userInformation={`${'John Doe'} (${'Student'})`}
            additionalAction={
                <HeaderCartridge
                    icon={<SuccessIcon width={32} height={32} />}
                    action={<Button>Voir mes résultats</Button>}
                >
                    <strong>Nouveau :</strong>&nbsp;Vos devoirs ont été corrigés !
                </HeaderCartridge>
            }
        />
    ))
    .add(
        'Footer',
        withInfo()(() => (
            <Footer>
                <p>All rights reserved.</p>
            </Footer>
        )),
    );
