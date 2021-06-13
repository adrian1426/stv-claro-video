import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setUrlPeliculaAction } from './redux/actions/peliculas/peliculasAction';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import PeliculaServices from './services/PeliculaServices';
import Loader from './components/common/Loader';

function App() {
  const dispatch = useDispatch();

  const getUrlPeliculas = useCallback(async () => {
    const peliculaServices = new PeliculaServices();
    const response = await peliculaServices.getUrlPeliculas();

    if (response.status === 200) {
      const url = response.data.response.modules.module[0].components.component.find(com => com.type === 'Listadoinfinito').properties.url;
      dispatch(setUrlPeliculaAction({ url }));
    } else {
      console.log('error al comsumir el servicio de modules level');
    }
  }, [dispatch]);

  useEffect(() => {
    getUrlPeliculas();
  }, [getUrlPeliculas]);

  return (
    <Router>
      <AppRouter />
      <Loader />
    </Router>
  );
}

export default App;
