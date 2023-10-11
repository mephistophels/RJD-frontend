import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
    primaryColor: 'teal',
})
root.render(
    // <React.StrictMode>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
            <App/>
        </MantineProvider>
    // </React.StrictMode>
);