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
- 再生ボタンの反映のタイミングがなんかおかしい問題
- 掛かってる曲をハイライト
- プレイリストから曲削除
- url期限切れ曲の削除
- 掛かってるCurrentAlbumのUIが必要？
- 独自ドメインの奴どうやって対応しよ？

add to wishlist

post
/collect_item_cb

fan_id: 1182997
item_id: 3295478132
item_type: album
band_id: 3570542698
ref_token: 438806968s0a3295478132x1658590374
crumb: |collect_item_cb|1658592174|I8hsTJpjrcJIkrP8rqEg5eTm9fs=
