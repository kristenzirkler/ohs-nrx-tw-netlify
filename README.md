# Nrx

## Requirements
* [Bundler](http://bundler.io/)
* [Jekyll](https://jekyllrb.com/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Ruby](https://www.ruby-lang.org/en/)

## Get started
* `bundle install` to install Ruby gems
* `npm ci` to install npm packages listed in `package-lock.json`
* `npm run start` or `npm run dev` to compile the site with development settings and run BrowserSync

## Build your site
* `npm run build:dev` to compile the site with development settings
* `npm run build:production` or `npm run build` to compile the site for production


## Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kristenzirkler/ohs-nrx-tw)

Note: By default, Netlify uses `jekyll build` as the build command. The included `netlify.toml` file will override it to use `npm run build`.