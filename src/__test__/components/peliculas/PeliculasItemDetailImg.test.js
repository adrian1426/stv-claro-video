import { render, screen } from '@testing-library/react'
import peliculaDetalleMock from './PeliculaDetalleMock.json';
import PeliculasItemDetailImg from "../../../components/peliculas/PeliculasItemDetailImg";

describe('Pruebas PeliculasItemDetailImg.js', () => {
  test('Debe contener una imagen de la pelicula', () => {

    const { image_base_vertical, title } = peliculaDetalleMock.response.group.common;

    render(
      <PeliculasItemDetailImg
        image_base_vertical={image_base_vertical}
        title={title}
      />
    );

    const images = screen.getAllByRole('img');
    const src = images[0].getAttribute('src');

    //Evaluación imagen de pelicula
    //uno se muestra cuando es mobile y otro desktop
    expect(images.length).toBe(2);
    expect(src).toBe(image_base_vertical);
  });
});
