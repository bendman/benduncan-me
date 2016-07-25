# benduncan.me
My [resume site](http://benduncan.me), open sourced for the sake of poking around. It is currently a bit over-engineered, to demo some technology and in preparation for future experimentation.

This started as a fork of my [React Blog](https://github.com/bendman/react-blog) repo, created as a live coding broadcast where I taught an introduction to common React issues for a production site.

## Development
To run the site in development mode, with `eslint` and watching for changes, run:

    npm install

Then in separate terminals:

    npm run webpack-watch
    npm run dev-server-watch

## Production
To run the site in production mode:

    npm install --production && npm start
