import {css} from "styled-components";

export const grommetTheme = {
    global: {
        colors: {
            brand: '#0054a3',
            'accent-1': '#f66b3b',
        },
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
    heading: {
        weight: 400
    },
    tab: {
        color: 'text',
        active: {
            background: 'brand',
        },
        hover: {
            background: 'background-back',
            color: 'control',
        },
        border: {
            side: 'bottom',
            color: 'background-back',
            active: {
                color: 'brand',
            },
            hover: {
                color: 'control',
            },
        },
        pad: 'small',
        margin: 'none',
        extend: ({theme}) => css`
          border-top-left-radius: 10px;
            /* or 'border-top-left-radius: ${theme.global.control.border.radius}' */
          border-top-right-radius: 10px;
            /* or 'border-top-right-radius: ${theme.global.control.border.radius} */
          font-weight: bold;
        `,
    },
};