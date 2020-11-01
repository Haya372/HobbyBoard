module.exports = {
    devServer: {
        port: 8080,
        // localhostでvueからexpressにAPIリクエストを送信する為の設定
        proxy: 'http://api_server:3000'
    },
}