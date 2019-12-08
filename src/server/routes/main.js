import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Routes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import render from '../render';
import axios from 'axios';
import { config } from '../../config/index';

const main = async (req, res, next) => {
  try {
    let initialState;
    try {
      const { token, email, name, id } = req.cookies;
      let user = {};
      if (email || name || id) {
        user = {
          id,
          email,
          name,
        }
      }

      let movieList = await axios({
        url: `${config.apiUrl}/api/movies`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'GET'
      })

      let userMovies = await axios({
        url: `${config.apiUrl}/api/movies?userId=${id}`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'GET'
      })

      movieList = movieList.data.data;
      userMovies = userMovies.data.data;

      initialState = {
        user,
        playing: {},
        myList: userMovies,
        trends: movieList.filter(movie => movie.contentRating === 'PG' && movie.id),
        originals: movieList.filter(movie => movie.contentRating === 'G' && movie.id),
      };
    } catch (error) {
      initialState = {
        user: {},
        playing: {},
        myList: [],
        trends: [],
        originals: [],
        error
      };
      console.log(error);
    }
    const isLogged = (initialState.user.id);
    const store = createStore(reducer, initialState);
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={{}}
        >
          <Layout>
            {renderRoutes(Routes(isLogged))}
          </Layout>
        </StaticRouter>
      </Provider>,
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (err) {
    next(err);
  }
};

module.exports = main;
