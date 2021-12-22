FROM node:16

WORKDIR /test_build/
COPY ./package.json /test_build/
COPY ./yarn.lock /test_build/
RUN yarn install

COPY . /test_build/
RUN yarn build:ssr

CMD yarn start