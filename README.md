# Bandcamp Player Chrome Extension 

## Building

1.  Clone repo
2.  `npm i`
3.  `npm run dev` to compile once or `npm run watch` to run the dev task in watch mode
4.  `npm run build` to build a production (minified) version

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

## TODO

- ロジックを集約したい
- ウィッシュリスト登録機能
- カートに入れる
- デザインちゃんとする
- プレイリストから曲削除
- url期限切れ曲の削除
- 予約注文のエラーハンドリング(落ちる)

