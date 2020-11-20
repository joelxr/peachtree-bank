[![Netlify Status](https://api.netlify.com/api/v1/badges/bd70a1f9-780b-4c15-ba37-a8a01fef7105/deploy-status)](https://app.netlify.com/sites/awesome-einstein-f30e24/deploys)![Run tests](https://github.com/joelxr/peachtree-bank/workflows/Run%20tests/badge.svg)[![codecov](https://codecov.io/gh/joelxr/peachtree-bank/branch/main/graph/badge.svg?token=S3GCAUR9QG)](https://codecov.io/gh/joelxr/peachtree-bank) 

# `peachtree-bank`

A bank sweet as a peach! 🍑

Live [here](https://awesome-einstein-f30e24.netlify.app).

## Building and running it

To build and run this project you just need to do the following.

```
cd webapp/

npm install

# To start the development server
npm run start

# To build it to production
npm run build
```

## Application structure

This application rely on Angular CLI boilerplate, so the folders are similar to any web application created with this tool.

But the following folders have been added to it, below the description and the motivation.

- `src/shared/types`: All classes and interfaces needed for this project can be found here.
- `src/design`: All `*.scss` files for styling are here,mostly constants to be reused over all components.
