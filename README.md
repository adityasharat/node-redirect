# node-redirect
Redirect HTTP calls

## Installation
`npm install`

## Config
* Open `config.json`
* Set the values according to your preferences
* Save `config.json`

example:

```json
{
  "port": "80",
  "isAndroidUrl": "http://google.com/",
  "default": "http://facebook.com/",
  "redirectRoute": "/"
}
```

## Run
node index.js

## Running on Heroku
check it out [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)
