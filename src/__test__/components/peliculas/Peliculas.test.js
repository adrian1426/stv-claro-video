import React from 'react';
import Peliculas from '../../../components/peliculas/Peliculas';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from "react-router-dom";
import WrapperRedux from '../../WrapperRedux';

describe('Peliculas', () => {
  test('Listado Peliculas - validar que exista un filter', async () => {
    render(
      <WrapperRedux>
        <MemoryRouter initialEntries={['/peliculas']}>
          <Route exact path={'/peliculas'} component={Peliculas} />
        </MemoryRouter>
      </WrapperRedux>
    );

    const loader = screen.getByTestId('filter');
    expect(loader).toBeInTheDocument();
  });
});