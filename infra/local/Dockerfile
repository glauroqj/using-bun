FROM oven/bun:latest

WORKDIR /app
COPY . /app

EXPOSE 5000

# COPY package.json ./
# COPY bun.lockb ./
# COPY src ./
RUN bun install

CMD bun dev
# FROM node:18-alpine

# WORKDIR /app

# EXPOSE 6061

# COPY . /app

# RUN yarn install

# RUN npm install -g local-ssl-proxy

# CMD yarn dev
