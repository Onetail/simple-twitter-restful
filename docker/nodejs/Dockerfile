FROM node:12.16.2

RUN apt-get update && apt-get -y install netcat && apt-get clean

WORKDIR /app

COPY . /app/
COPY ./docker/entrypoint.sh /

RUN yarn install && yarn cache clean
RUN [ "chmod", "+x", "/entrypoint.sh"]

ENTRYPOINT [ "yarn" ]  