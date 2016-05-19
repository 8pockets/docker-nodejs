# docker-nodejs
Dockerでnodejs,mysql,nginxアプリを動かすdockerファイル  
Docker version 1.11.1で動作  

### create app
1.
$ sudo chown -R 1000:1000 logs  
ローカルのloggerディレクトリパーミションをコンテナのappのパーミッションと合わせないとログを出力できない  
2.
$ docker-compose up -d  
or  
$ COMPOSE_HTTP_TIMEOUT=200 docker-compose up

### log
$ tail -f logs/node_app/node_app.log
