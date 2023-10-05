FROM oven/bun:latest

WORKDIR /app
COPY . /app

# COPY package.json ./
# COPY bun.lockb ./
# COPY src ./

CMD yarn dev

RUN bun install

# FROM node:18-alpine

# WORKDIR /app

# EXPOSE 6061

# COPY . /app

# RUN yarn install

# RUN npm install -g local-ssl-proxy

# CMD yarn dev
