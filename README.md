# Trivjoy Frontend

[![Netlify Status](https://api.netlify.com/api/v1/badges/3ac49b2d-6c13-4d17-8c7b-e7609fe985a5/deploy-status)](https://app.netlify.com/sites/trivjoy/deploys)

## Tech Stack

- React: To component-based web application
  - React Router: To manage multiple pages/routes of the application
  - React Helmet: To change the title when we change the page in Router
- Redux: To managing global state in store
  - Redux Devtools extension: To inspect all Redux behavior
  - Redux Logger: To log our actions in the console
  - Redux Thunk: To asynchronous operations in reducer
- CSS in JS: To style the components without CSS file
  - Emotion: To style the components flexibly with `styled` or other ways
  - `styled-components`: To style the components with `styled`
- Axios: To request/fetch data to/from the backend API server
- `dayjs`: To convert from any date to better formatted date
- Filestack: To upload and retrieve images
- JWT Decoder: To decode JWT that is saved in the browserStorage

## Setup

Run the `setup.sh` script first, to copy `.env.schema` into `.env`.

```sh
./setup.sh
```

Then you fill the env variables. To get the Filestack API Key, go to https://www.filestack.com then **Sign Up Free** for an account. After logged in, you can get your API Key.

```txt
REACT_APP_BACKEND_API_URL=http://localhost:0000 # change this
REACT_APP_FILESTACK_API_KEY=your_api_key_from_filestack_here # change this
```

## Development

```sh
yarn start
```

Then open `http://localhost:3000`.

## Building

```sh
yarn build
npm install -g serve
serve -s build
```

Then open `http://localhost:5000`.

In deployment server such as Netlify, this build process should run automatically and the port is assigned by them (not `5000`).

## Deploying

You can use Netlify to deploy. After which, you have to configure the environment variables as well.

```txt
REACT_APP_BACKEND_API_URL=
REACT_APP_FILESTACK_API_KEY=
```
