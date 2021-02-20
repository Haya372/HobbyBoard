## 環境構築
docker, docker-composeのインストール  
docker for Macってのをインストールするといいらしい 

## 起動
```
docker-compose up -d --build
```
でビルドして起動できる 
localhost:8080にアクセスしてページが表示されれば成功！ 
```
docker-compose down
```
でサーバーをダウン

## 補足
```
docker logs {containar_name}
```
でログを見れる 
```
docker-compose exec {container_name} command
```
でコンテナ上でそのコマンドを実行できる  

## MySQLの初期化
```
docker exec api_server npx sequelize db:migrate
```
でテーブルを作成できる  
```
docker exec api_server node init_db.js
```
でダミーのユーザーデータがデータベースに保存される  
使い勝手はあんまりよくないらしいけどデータベースの初期化とかははsequelizeっていうORMでやってる  

※追記  
docker-compose.ymlにvolumesを追記してmysqlコンテナの/var/lib/mysqlとを./mysql_dataを共有したので毎回初期化を行う必要がなくなった
