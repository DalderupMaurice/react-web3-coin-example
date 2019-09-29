FROM node:lts-alpine as builder

# install and cache app dependencies
COPY ./client/package.json package.json
RUN apk add --no-cache git

## Install build toolchain, install node deps and compile native add-ons
RUN apk add --no-cache python make g++
RUN npm install --no-cache


FROM node:lts-alpine as app

# set working directory
WORKDIR /app

## Copy built node modules and binaries without including the toolchain
COPY --from=builder node_modules /app/node_modules

RUN ls /app
RUN ls /app/node_modules

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# start app
CMD ["npm", "start"]