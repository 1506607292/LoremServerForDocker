FROM openresty/openresty
WORKDIR /home

COPY html /usr/local/openresty/nginx/html/
COPY luas /home/luas/
COPY nginx.conf /etc/openresty/nginx.conf
RUN ln -s /usr/local/openresty/nginx/html /home/html
