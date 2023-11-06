# Project Title
Music Bubbles

## Demo link:
You can access the project at:

## Table of Contents:
- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)

## About The App
Music Bubbles is an app that utilizes the `vis.js` force graph library to display music artists, albums and tracks in a fun manner by plugging into the Spotify API. 

## Screenshots
`![Screenshot](https://github.com/vladimir-grigore/music-bubbles/blob/main/Screenshot.png?raw=true)`

## Technologies
`React`, `vis.js`, `Material UI`, `Redux`

## Setup
- download or clone the repository
- run `yarn install`
- run `yarn start`
- create a `.env` file and add the following line: `REACT_APP_BACKEND_URL="http://127.0.0.1:3001/api"`
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser

Note: in order to have access to the Spotify API, follow these steps:
- Clone the [spotify-api](https://github.com/vladimir-grigore/spotify-api) Ruby on Rails repo
- run `bundle install`
- run `rails s`
