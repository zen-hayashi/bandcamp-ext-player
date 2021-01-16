# Chrome Extension (built with TypeScript + React)

> This project is a boilerplate project to allow you to quickly build chrome extensions using TypeScript and React.

## Building

1.  Clone repo
2.  `npm i`
3.  `npm run dev` to compile once or `npm run watch` to run the dev task in watch mode
4.  `npm run build` to build a production (minified) version

## Installation

1.  Complete the steps to build the project above
2.  Go to [_chrome://extensions_](chrome://extensions) in Google Chrome
3.  With the developer mode checkbox ticked, click **Load unpacked extension...** and select the _dist_ folder from this repo

## Architecture

```plantuml
Background <-- PopUp : control audio
PopUp --> Storage : set playlist/now playing
PopUp --> Storage : get playlist/now playing
PopUp --> Content : get current album
Content --> PopUp : set current album

Background : startAudio()
Background : stopAudio()
PopUp : Playlist
PopUp : NowPlaying
PopUp : clearPlaylist()
PopUp : addPlaylist()
```
