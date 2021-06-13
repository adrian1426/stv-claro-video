import React from 'react';
import { render, screen } from '@testing-library/react';
import WrapperRedux from './WrapperRedux';
import App from '../App';

describe('App', () => {

    test('App - validar que exista un loader', async () => {
        render(
            <WrapperRedux>
                <App />
            </WrapperRedux>
        );

        const loader = screen.getByTestId('loader');
        expect(loader).toBeInTheDocument();
    });
});