const router = require('express').Router()
const axios = require('axios')
const spotifyCreds = require('../../spotify.creds')
const qs = require('querystring')

router.get('/token', async function(req, res) {
  try {
    let token = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify({
        grant_type: 'authorization_code',
        code: req.query.code,
        redirect_uri: spotifyCreds.SPOTIFY_REDIRECT_URI
      }),
      {
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(
              spotifyCreds.SPOTIFY_CLIENT_ID +
                ':' +
                spotifyCreds.SPOTIFY_CLIENT_SECRET
            ).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    res.status(201).json(token.data)
  } catch (e) {
    res.status(e.response.status).json(e.response.data)
  }
})

router.get('/refresh', async function(req, res) {
  try {
    let token = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify({
        grant_type: 'refresh_token',
        refresh_token: req.query.refresh_token
      }),
      {
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(
              spotifyCreds.SPOTIFY_CLIENT_ID +
                ':' +
                spotifyCreds.SPOTIFY_CLIENT_SECRET
            ).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    res.status(201).json(token.data)
  } catch (e) {
    res.status(e.response.status).json(e.response.data)
  }
})

router.get('/bruh', function(req, res) {})

module.exports = router
