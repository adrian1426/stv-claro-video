import { render, screen } from '@testing-library/react'
import peliculaDetalleMock from './PeliculaDetalleMock.json';
import PeliculasItemDetailDes from "../../../components/peliculas/PeliculasItemDetailDes";

describe('Pruebas PeliculasItemDetailDes.js', () => {
  test('Debe mostrar los detalles de la pelicula', () => {
    const { title, large_description, extendedcommon, ranking } = peliculaDetalleMock.response.group.common;

    render(
      <PeliculasItemDetailDes
        title={title}
        large_description={large_description}
        extendedcommon={extendedcommon}
        ranking={ranking}
        redirectMenu={() => { }}
      />
    );

    const titlePelicula = screen.getByTestId('titlePelicula').textContent;
    const titleDescription = screen.getByTestId('titleDescription').textContent;
    const generos = screen.getAllByTestId('genero');
    const roles = screen.getAllByTestId('roles');

    //Evaluación titulo de pelicula
    expect(titlePelicula).toBe(title);
    //Evaluación descripcion de la pelicula
    expect(titleDescription).toBe(large_description);
    //Evaluación de los generos 
    expect(generos.length).toBe(1);
    expect(generos[0].textContent).toBe('Ciencia ficción');
    //Evaluación roles(actor,director,etc.)
    expect(roles.length).toBe(10);
  });
});
