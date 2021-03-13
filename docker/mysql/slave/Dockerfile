FROM mysql:5.7.22

ENV MYSQL_ROOT_PASSWORD root

COPY ./docker/mysql-slave.sh /

RUN [ "chmod", "+x", "/mysql-slave.sh"]