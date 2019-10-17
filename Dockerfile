FROM nginx:1.13-alpine
MAINTAINER Yang Yang <yang.niceday@gmail.com>
COPY nginx.conf /etc/nginx/conf.d/default.conf
# RUN envsubst < /etc/nginx/conf.d/app.conf> /etc/nginx/conf.d/default.conf

COPY dist /www/set_fe/dist
COPY index.html /www
LABEL version="0.1" \
      description="This image is used to set up nginx sever."
