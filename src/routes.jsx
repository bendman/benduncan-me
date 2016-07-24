/* eslint-disable global-require */// use `require.ensure` for codesplitting

// Shims for require methods in Node
/* eslint-disable */
if (typeof require.ensure !== 'function') { require.ensure = function (d, c) { c(require); }; }
if (typeof require.include !== 'function') { require.include = function () {}; }
/* eslint-enable */


import { createRoutes } from 'react-router';

import PageWrapper from './components/page-wrapper';


export default createRoutes({
  path: '/',
  component: PageWrapper,
  getIndexRoute(nextState, cb) {
    require.ensure([], () => {
      const HomePage = require('./components/home-page').default;
      cb(null, { component: HomePage });
    }, 'home-page');
  },
});
