FROM node:18

WORKDIR /usr/src

# Install dependencies and build the app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3041

# start
CMD ["npm", "start"]
