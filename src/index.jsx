import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
export const theme = createTheme({
    primaryColor: 'pink',
    colors: {
        red: ['#FF0000'],
        gray: ['#F3F3F3', '#888888'],
        pink: ['#F97171']
    }
})

root.render(
    // <React.StrictMode>
        <MantineProvider defaultColorScheme="light" theme={theme}>
            <App/>
        </MantineProvider>
    // </React.StrictMode>
);
