# Blogging-app with a Node server on Heroku

A minimal example of using a Node backend **Blogging App** (server for API, proxy, & routing) with a [React frontend](https://github.com/UmidjonOkhunov/blogs_frontend).


* 📐 [Design Points](#user-content-design-points)
* 🕺 [Demo](#user-content-demo)
* 🚀 [Deploy to Heroku](#user-content-deploy-to-heroku)
* 💻 [Local Development](#user-content-local-development)

To deploy a frontend-only React app, use the static-site optimized  
▶️ [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack)


## Design Points

A combo of two npm projects, the backend server and the frontend UI. So there are two `package.json` configs and thereforce [two places to run `npm` commands](#user-content-local-development):

  1. [**Node server**](server/): [`./package.json`](package.json)
      * [deployed automatically](https://devcenter.heroku.com/categories/deployment) via heroku/nodejs buildpack
      * 
  2. [**React UI**](build/): [`build/package.json`](build/package.json)
      * generated by [create-react-app](https://github.com/facebookincubator/create-react-app)
      * deployed via `build` script in the Node server's [`./package.json`](package.json)
      * module cache configured by `cacheDirectories`

Includes a minimal [Node Cluster](https://nodejs.org/docs/latest-v8.x/api/cluster.html) [implementation](server/index.js) to parallelize the single-threaded Node process across the available CPU cores.

### Major Design Points
- Server code is implemented with [express](http://expressjs.com/) library.
- The server is RESTful.
- The database used is [MongoDB](https://www.mongodb.com/) which is a so-called [document database](https://en.wikipedia.org/wiki/Document-oriented_database).
## Demo

[Demo deployment](https://frozen-dusk-56361.herokuapp.com): example API call from the React UI is [fetched with a relative URL](build/src/App.js#L16) that is served by an Express handler in the Node server.


## Deploy to Heroku

```bash
heroku create
git push heroku master
```

This deployment will automatically:

  * detect [Node buildpack](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nodejs)
  * build the app with
    * `npm install` for the Node server
    * `npm run build` for create-react-app
  * launch the web process with `npm start`
    * serves `../build/build/` as static files
    * customize by adding API, proxy, or route handlers/redirectors

⚠️ Using npm 5’s new `package-lock.json`? We resolved a compatibility issue. See [PR](https://github.com/mars/heroku-cra-node/pull/10) for more details.

👓 More about [deploying to Heroku](https://devcenter.heroku.com/categories/deployment).



## Local Development

Because this app is made of two npm projects, there are two places to run `npm` commands:

1. **Node API server** at the root `./`
1. **React UI** in `build/` directory.

### Run the API server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for Node

```bash
npm install package-name --save
```


### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](build/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd build/

# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for React UI

```bash
# Always change directory, first
cd build/

npm install package-name --save
```
### Run the API server
In a terminal:
```javascript
# Initial setup
npm install

# Start the server
npm start
```

### Install new npm packages for Node
``` javascript
npm install package-name --save
```