# docker-nodejs

## create app
$ sudo chown -R 1000:1000 logs  
ローカルのloggerディレクトリパーミションをコンテナのappのパーミッションと合わせないとログを出力できない  

then--

$ docker-compose up -d  

or  

$ COMPOSE_HTTP_TIMEOUT=200 docker-compose up

### log
$ tail -f logs/node_app/node_app.log
