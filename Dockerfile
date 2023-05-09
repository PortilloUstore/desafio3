FROM node:20

# clone
RUN git clone --depth 1 https://github.com/PortilloUstore/desafio3.git /usr/src/desafio

# Create app directory
WORKDIR /usr/src/desafio

# install dependencies
# RUN npm ci --omit=dev

EXPOSE 8080

CMD ["npm", "start"]