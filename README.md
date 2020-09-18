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
