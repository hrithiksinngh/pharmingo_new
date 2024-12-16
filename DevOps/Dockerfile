FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf
COPY assets/nginx/nginx.conf /etc/nginx/nginx.conf
COPY . /usr/share/nginx/html