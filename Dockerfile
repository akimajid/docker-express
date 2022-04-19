FROM node
WORKDIR /app
ADD . /app/
RUN npm install
EXPOSE 2020
CMD npm start