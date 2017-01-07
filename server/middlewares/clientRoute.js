import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import {Provider} from 'react-redux'
import routes from '../../client/routes'
import configureStore from '../../client/common/store/configureStore'

const store = configureStore()

export default function(req,res,next){
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).end(`Internal Server Error ${err}`);
    } else if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const html = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        res.render('index',{
            root:html,
            state:store.getState()
        });
    } else {
      res.status(404).end('Not found');
    }
  });
    next();
}
