FROM node:20
WORKDIR /usr/src/shrapnelnet
COPY package.json .
RUN npm i
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm run preview"]