FROM node:12-alpine

ADD build /var/application
RUN npm install serve -g

ENTRYPOINT serve -l 8080 -s /var/application
