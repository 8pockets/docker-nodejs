FROM node:6.2.0

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@3.9.0

# Create app directory
ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/src/

RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/src
RUN npm install

USER root
COPY . $HOME/src
RUN chown -R app:app $HOME/*
USER app

CMD [ "node", "server.js"]
