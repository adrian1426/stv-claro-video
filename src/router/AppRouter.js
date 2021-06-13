import React from 'react';
import Peliculas from '../components/peliculas/Peliculas';
import PeliculasItemDetail from '../components/peliculas/PeliculasItemDetail';
import { Switch, Route, Redirect } from 'react-router-dom';

const AppRouter = () => {
  const path = '/peliculas';

  return (
    <Switch>
      <Route exact path={path} component={Peliculas} />
      <Route exact path={`${path}/:id`} component={PeliculasItemDetail} />
      <Redirect from='*' to={path} />
    </Switch>
  );
};

export default AppRouter;