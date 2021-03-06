# React Isomorphic Boilerplate

An universal React isomorphic boilerplate for building server side render web app.

## Introduction

This repository is an universal React isomorphic boilerplate for developer to quickly build a super fast and powerful web app that can be rendered both on the client and on the server using the most cutting-edge technology. Compared to others, this boilerplate has more pithily and more elegant configuration file based on environment variables, one for development, one for production. In addition, the directory structure is organized corresponding to mvc principle aim at the best practice.

## Technology Stack

- [React](https://github.com/facebook/react)
- [React Router](https://github.com/ReactTraining/react-router)
- [Redux](https://github.com/reactjs/redux)
- [Redux+](https://github.com/xgrommx/awesome-redux)
- [Sass](https://github.com/sass/sass)
- [PostCSS](https://github.com/postcss/postcss)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [express](https://github.com/expressjs/express)
- [Webpack](https://github.com/webpack/webpack)
- [Webpack+](https://webpack.js.org/loaders/)
- [Babel](https://github.com/babel/babel)
- [Babel+](http://babeljs.io/docs/plugins/)
- [ESLint](https://github.com/eslint/eslint)
- [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html)
- [Code Splitting](https://webpack.github.io/docs/code-splitting.html)
- ~~Database~~
- ~~Test Framework~~

## Getting Started

- Require Node.js v6 or later.
- `npm install` to install dependencies and devDependencies.
- `npm run dev` to start up the development environment.
- `npm run build` to compile and bundle the client and server files.
- `npm start` to deploy the production server.

## What's included

```
react-isomorphic-boilerplate/                // root directory
├── build/                                   // webpack config directory
│     ├── webpack.dev.config.js                 // config for webpack when run development bundle
│     └── webpack.prod.config.js                // config for webpack when run production bundle
├── client/                                  // client directory
│     ├── about/                                // `about` module
│     ├── common/                               // `common` module
│     ├── home/                                 // `home` module
│     ├── shared/                               // shared module
│     ├── explore/                              // `explore` module
│     ├── index.js                              // client entry file
│     └── routes.js                             // client route config
├── dist/                                    // bundle output directory
│     ├── client/                               // the client side output directory
│     └── server/                               // the server side output directory
├── server/                                  // server directory
│     ├── controllers/                          // controllers in server
│     ├── middlewares/                          // custom middlewares in server
│     ├── models/                               // models in server
│     ├── routes/                               // routes in server
│     ├── app.js                                // create koa instance in server
│     ├── server.dev.js                         // entry file in development mode
│     └── server.prod.js                        // entry file in production mode
├── views/                                   // views directory
│     ├── dev/                                  // output files generated by tpl in development mode
│     ├── prod/                                 // output files generated by tpl in production mode
│     └── tpl                                   // templates injected by html-webpack-plugin
├── .editorconfig                            // uniform the text editor behavior
├── .eslintignore                            // which paths should be omitted from linting
├── .eslintrc.json                           // specific rules for eslint
├── .gitattributes                           // uniform the new line perform behavior
├── .gitignore                               // ignore the specific files when using git
├── LICENSE                                  // license information
├── package.json                             // npm entry file
├── README.md                                // just what you see now
└── yarn.lock                                // lock file autogenerated by yarn
```

## Why Isomorphic

#### SEO

An application that can only run in the client-side cannot serve HTML to crawlers, so it will have poor [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization) by default. Web crawlers function by making a request to a web server and interpreting the result. but if the server returns a blank page, it’s not of much value. There are workarounds, but not without jumping through some hoops.

#### Performance

By the same token, if the server doesn’t render a full page of HTML but instead waits for client-side JavaScript to do so, users will experience a few critical seconds of blank page or loading spinner before seeing the content on the page. There are plenty of studies showing the drastic effect a slow site has on users, and thus revenue.

#### Maintainability

While the ideal case can lead to a nice, clean separation of concerns, inevitably some bits of application logic or view logic end up duplicated between client and server, often in different languages. Common examples are date and currency formatting, form validations, and routing logic. This makes maintenance a nightmare, especially for more complex apps.

## Problem exists yet

#### [FOUC](https://www.google.com.hk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&ved=0ahUKEwimhPqTrofRAhXHkJQKHTEYCfMQFggjMAE&url=https%3a%2f%2fen%2ewikipedia%2eorg%2fwiki%2fFlash_of_unstyled_content&usg=AFQjCNGjAnNtZtjPb5oLsT9Wlf9az7hXTw)

It happens when run in development mode. This is caused by deprecated using [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) in development for getting a seamless hmr experience.(Why deprecated? See this [Issue](https://github.com/webpack/extract-text-webpack-plugin/issues/30)) If you are not an OCD, go ahead, ignore it.

#### Mismatch

It happens also when run in development mode. This is caused by when you update the react component code and reload the page, the markup generated mismatches that on server render. However, once you restart the server, the checksum will be valid. So it is harmless, ignore it also.

## License

[MIT](https://github.com/cllgeek/mern-boilerplate/blob/master/LICENSE)
