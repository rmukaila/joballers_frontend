# pull official base image
FROM node:16.18.1-alpine3.17

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

#idealy You need react scripts >=5.x.x
RUN npm i react-scripts -g 

# add app
COPY . ./app

#Change write permission to this folder else eslint will get stacked :)
RUN chown -R node /app/node_modules

USER node


# start app
CMD ["npm", "start"]
