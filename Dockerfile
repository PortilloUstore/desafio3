FROM node:20

# Create app directory


RUN git clone --depth 1 https://github.com/PortilloUstore/desafio3.git /usr/src/desafio

# install dependencies
WORKDIR /usr/src/desafio
# RUN npm ci --omit=dev

EXPOSE 8080

CMD ["npm", "start"]