FROM node

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run serve

# WORKDIR /dist

EXPOSE 8081

CMD [ "npm run serve" ]