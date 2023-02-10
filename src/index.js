import React from 'react';
import ReactDOM from 'react-dom/client';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import './clientlibs/index.css';

import App from './App';

const Wrapper = () => {
    return (
        <Provider theme={defaultTheme}>
            <App />
        </Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const app = <Wrapper />
root.render(app);