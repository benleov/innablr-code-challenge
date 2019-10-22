FROM node:11

ARG TRAVIS_COMMIT
ENV TRAVIS_COMMIT=$TRAVIS_COMMIT

COPY . /

RUN npm install
RUN npm run build

CMD ["npm", "start"]
