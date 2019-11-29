# Vue-Spotify

> A spotify client

## Build Set

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
# Usage
Create a new file in the root called spotify.creds.js
```javascript
module.exports = {
  SPOTIFY_AUTH_URL: 'https://accounts.spotify.com/authorize',
  SPOTIFY_CLIENT_ID: '',
  SPOTIFY_REDIRECT_URL: '',
  SPOTIFY_RESPONSE_TYPE: 'token'
}
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
