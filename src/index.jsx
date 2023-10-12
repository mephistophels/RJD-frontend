import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
    primaryColor: 'red',
    defaultRadius: 2,
})
root.render(
    // <React.StrictMode>
        <MantineProvider defaultColorScheme="light" theme={theme}>
            <App/>
        </MantineProvider>
    // </React.StrictMode>
);