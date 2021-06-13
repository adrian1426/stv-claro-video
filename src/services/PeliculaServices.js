import axios from 'axios';

class PeliculaServices {

  constructor() {
    if (!!PeliculaServices.instance) {
      return PeliculaServices.instance;
    }

    PeliculaServices.instance = this;

    return this;
  }

  parametersAccess = 'device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=aqgnmp9kq8179vk29v06sbr1o7';
  apiPelicula = `${process.env.REACT_APP_API_CLARO_VIDEO}`;

  getUrlPeliculas = async () => {
    try {
      const uri = 'services/cms/level';
      const parameters = 'node=gen_scifi&domain=https:%2F%2Fmfwkweb-api.clarovideo.net%2F&origin=https:%2F%2Fwww.clarovideo.com%2F';
      const response = await axios.get(`${this.apiPelicula}/${uri}?${parameters}&${this.parametersAccess}`);

      return response;
    } catch (error) {
      return error.response;
    }
  };

  getPeliculas = async (uriPelicula) => {
    try {
      const response = await axios.get(`${this.apiPelicula}${uriPelicula}&${this.parametersAccess}`);
      return response;
    } catch (error) {
      return error.response;
    }
  };

  getDetailPeliculaById = async (idPelicula) => {
    try {
      const uri = 'services/content/data';
      const response = await axios.get(`${this.apiPelicula}/${uri}?group_id=${idPelicula}&${this.parametersAccess}`);

      return response;
    } catch (error) {
      return error.response;
    }
  };
}

export default PeliculaServices;