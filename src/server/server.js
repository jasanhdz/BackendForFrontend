const express = require('express');
const webpack = require('webpack');
const helmet = require('helmet');
const axios = require('axios');
const passport = require('passport');
const boom = require('@hapi/boom');
const cookieParser = require('cookie-parser');
const { config } = require('../config');
const main = require('./routes/main');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/public`));

// BASIC STRTEGY
require('./utils/auth/strategies/basic');

if (config.dev === 'development') {
  console.log('Cargando la configuración de desarrollo');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost${config.port}`,
    port: config.port,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));

} else {
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

// Basic Strategy
require('./utils/auth/strategies/basic');

// OAuth2 Strategy
require('./utils/auth/strategies/oauth');

// Twitter Strategy
require('./utils/auth/strategies/twitter');

// Facebook Strategy
require('./utils/auth/strategies/facebook');


app.post('/auth/sign-in', async (req, res, next) => {
  passport.authenticate('basic', async (error, data) => {
    try {
      console.log(data);
      if (error || !data) {
        next(boom.unauthorized('Error la data viene vacía :('));
      }

      req.login(data, { session: false }, async (error) => {
        if (error) {
          next(error);
        }

        const { token, ...user } = data;

        res.cookie('token', token, {
          httpOnly: config.dev !== 'development',
          secure: config.dev !== 'development',
          domain: 'moviesfantansty.com',
        });

        res.status(200).json(user);
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;
  try {
    // console.log(config.apiUrl);
    await axios({
      url: `${config.apiUrl}/api/auth/sign-up`,
      method: 'post',
      data: user,
    });
    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      // id: userData,
    });
  } catch (error) {
    next(error);
  }
});

app.post('/api/movies/:movieId', async (req, res, next) => {
  console.log('Esto trae el request................................');
  const { movieId } = req.params;
  const { id, token } = req.cookies;
  console.log(movieId, id);
  try {
    await axios({
      url: `${config.apiUrl}/api/movies/${movieId}`,
      method: 'post',
      headers: { Authorization: `Bearer ${token}` },
      // body: {_id: id}
    })
    res.status(201).json({
      ok: 'TODO bien',
    });
  } catch (error) {
    next(error);
  }
});

app.get('*', main);

app.listen(config.port, (err) => {
  if (err) console.log(err);
  console.log(`Loading ${config.dev} config`);
  console.log(`El servidor está corriendo en htpp://localhost:${config.port}`);
});
