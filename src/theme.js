import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

// Unit is ex
const spaceBase = 1.2;
const fontBase = 1.33;

const fontSizes = {
    /* tslint:disable */
    base: `${fontBase}ex`,
    xxs: `${fontBase * 0.25}ex`,
    xs: `${fontBase * 0.75}ex`,
    s: `${fontBase}ex`,
    m: `${fontBase * 1.5}ex`,
    l: `${fontBase * 2.5}ex`,
    xl: `${fontBase * 4}ex`,
    /* tslint:enable */
};

export const theme = {
    spaceBase,
    colors: {
        black: '#000000',
        blue: '#5766ae',
        green: '#52BD4A',
        lightBlue: '#e5e6ed',
        lightGrey: '#f4f4f4',
        lightRed: '#eb9a9b',
        orange: '#FFC300',
        primaryRed: '#b1002a',
        red: '#fa575a',
        warmGrey11c: '#857761',
        warmGrey4c: '#cfc8c0',
        warmGrey8c: '#aa9f97',
        white: '#ffffff',
    },

    fonts: {
        appHeader: `bold ${fontSizes.l} maple, 'Open Sans'`,
        button: `${fontSizes.s} 'Open Sans', sans-serif`,
        copy: `${fontSizes.s} 'Open Sans', sans-serif`,
        title: `${fontSizes.l} 'Open Sans', sans-serif`,
    },

    fontSizes,

    maxScreenWidth: '1280px',

    spacing: {
        /* tslint:disable */
        base: `${spaceBase}ex`,
        xxs: `${spaceBase * 0.5}ex`,
        xs: `${spaceBase}ex`,
        s: `${spaceBase * 1.5}ex`,
        m: `${spaceBase * 2.5}ex`,
        l: `${spaceBase * 4}ex`,
        xl: `${spaceBase * 6.5}ex`,
        /* tslint:enable */
    },
    /* tslint:disable */

    transitions: {
        duration: '0.33s',
        longDuration: '0.66s',
        ease: 'ease-out',
    },

    medias: {
        largerThanPhone: '@media (min-width: 600px)',
    },
};

export const applyGlobals = () => {
    injectGlobal`
        ${styledNormalize}

        @font-face {
            font-family: 'maple';
            src: url("/fonts/maple-light-webfont.eot");
            src: url("/fonts/maple-light-webfont.eot?#iefix") format("embedded-opentype"), url("/fonts/maple-light-webfont.woff2") format("woff2"), url("/fonts/maple-light-webfont.woff") format("woff"), url("/fonts/maple-light-webfont.ttf") format("truetype"), url("/fonts/maple-light-webfont.svg#mapleregular") format("svg");
            font-weight: 200;
            font-style: normal;
        }

        @font-face {
            font-family: 'maple';
            src: url("/fonts/maple-regular-webfont.eot");
            src: url("/fonts/maple-regular-webfont.eot?#iefix") format("embedded-opentype"), url("/fonts/maple-regular-webfont.woff2") format("woff2"), url("/fonts/maple-regular-webfont.woff") format("woff"), url("/fonts/maple-regular-webfont.ttf") format("truetype"), url("/fonts/maple-regular-webfont.svg#maple_regularregular") format("svg");
            font-weight: 400;
            font-style: normal;
        }

        @font-face {
            font-family: 'maple';
            src: url("/fonts/maple-medium-webfont.eot");
            src: url("/fonts/maple-medium-webfont.eot?#iefix") format("embedded-opentype"), url("/fonts/maple-medium-webfont.woff2") format("woff2"), url("/fonts/maple-medium-webfont.woff") format("woff"), url("/fonts/maple-medium-webfont.ttf") format("truetype"), url("/fonts/maple-medium-webfont.svg#maplemedium") format("svg");
            font-weight: 700;
            font-style: normal;
        }

        @font-face {
            font-family: 'maple';
            src: url("/fonts/maple-bold-webfont.eot");
            src: url("/fonts/maple-bold-webfont.eot?#iefix") format("embedded-opentype"), url("/fonts/maple-bold-webfont.woff2") format("woff2"), url("/fonts/maple-bold-webfont.woff") format("woff"), url("/fonts/maple-bold-webfont.ttf") format("truetype"), url("/fonts/maple-bold-webfont.svg#mapleregular") format("svg");
            font-weight: 900;
            font-style: normal;
        }

        * {
            box-sizing: border-box;
        }

        html {
            width: 100%;
            height: 100%;
        }

        body {
            width: 100%;
            height: 100%;
            background-color: ${theme.colors.lightGrey};
            font-size: 16px;
            font-family: 'Open Sans';
            padding-top: ${theme.spacing.xl};
        }

        #root {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        p {
            line-height: 1.5;
        }
    `;
};
