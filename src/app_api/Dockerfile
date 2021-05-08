FROM node:14-alpine

#ARG NODE_ENV=docker
#ARG MONGODB_DOCKER_URI=mongodb://mongo-db:27017/sp-lp-20
#ENV NODE_ENV=${NODE_ENV}
#ENV MONGODB_DOCKER_URI=${MONGODB_DOCKER_URI}

# Privzeta mapa z aplikacijo za vse ukaze v nadaljevanju (COPY, RUN, CMD itd.)
WORKDIR /usr/src/app

# Kopiraj package.json in package-lock.json ter poskrbi za namestitev knjižnic
# Docker bo poskrbel za medpomnjenje node_modules map, ki se ne bo spremenila,
# če ni prišlo do spremembe v package.json
COPY package.json /usr/src/app/
RUN npm install

# Kopiraj izvorno kodo aplikacije
COPY . /usr/src/app
EXPOSE 3000

CMD [ "npm", "start" ]