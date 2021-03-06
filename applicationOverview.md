# Application overview

## アプリ概要
新しい趣味を見つける掲示板
## 開発理由
コロナを通して、今までの趣味を満喫できない人が増えたため、新しい趣味を見つけて欲しいと考えたから。
## ユーザーストーリー
- コロナを通して、旅行やライブにいけず趣味を満喫できない人が増えた。
- 1人では探すのが難しい新しい趣味を見つけ、一緒に楽しむ仲間を見つけられるようになる。
## 機能
- 自分のお勧めの趣味を発信（noteみたいな感じ）
- 時間を決めて仲間を募集できる機能
- 同じ趣味を持つ人と語るページ（2chみたいなやつ）（保留）
## フロントエンド
- トップページ（ヘッダー、募集部分、投稿部分）
    - 匿名部分のうち、ログイン時は自分のコメントのみ名前を表示、非ログイン時は、全て匿名表示（趣味一覧部分や募集一覧部分）
- 趣味、募集検索ページ
- 募集詳細ページ
    - 匿名部分のうち、ログイン時は自分のコメントのみ名前を表示、非ログイン時は、全て匿名表示（スレッド部分とか）
- 趣味詳細ページ
    - 匿名部分のうち、ログイン時は自分のコメントのみ名前を表示、非ログイン時は、全て匿名表示（スレッド部分とか）
- 募集投稿ページ
    - 名無しにするかしないかボタン
- 趣味投稿ページ
    - 名無しにするかしないかボタン
- ログインページ
## バックエンド
- 趣味、募集検索機能
- 趣味、募集へのコメント追加、変更、削除（スレッドのような）
- いいね、よくないね機能
- ログイン機能
- 趣味、募集に対する編集、削除機能
- 募集内容に参加するに関する機能
- 時間になったら、募集を消す機能
## 各人への配分
- としき
    - フロントエンド
        - 趣味、募集検索ページ
        - 募集詳細ページ
        - トップページのヘッダー部分
    - バックエンド
        - いいね、よくないね機能
        - ログイン機能
        - 趣味と募集に関する削除、編集機能
- はやと
    - フロントエンド
        - 趣味詳細ページ
        - 趣味投稿ページ
        - トップページの募集部分
    - バックエンド
        - 募集内容に参加するに関する機能
        - 時間になったら、募集を消す機能
- たにもと
    - フロントエンド
        - 募集投稿ページ
        - ログインページ
        - トップページの投稿部分
    - バックエンド
        - 趣味、募集検索機能
        - 趣味、募集へのコメント追加、変更、削除（スレッド）
## 将来的に...
