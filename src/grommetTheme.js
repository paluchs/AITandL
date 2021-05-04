import {css} from "styled-components";

export const grommetTheme = {
    global: {
        colors: {
            brand: '#11d0a8',
            'accent-1': '#8ed0c1',
        },
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
    tab: {
        color: 'text',
        active: {
            background: 'background-back',
        },
        hover: {
            background: 'background-back',
            color: 'control',
        },
        border: {
            side: 'bottom',
            color: 'background-back',
            active: {
                color: 'border',
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