FROM node:16 as build-stage
ARG VUE_APP_API_URL
ENV VUE_APP_API_URL=${VUE_APP_API_URL}
WORKDIR /app
COPY package.json yarn.lock ./
COPY frontend/package.json ./frontend/package.json
RUN yarn install
COPY . .
RUN cd frontend && yarn run build

FROM nginx:stable-alpine as production-stage
COPY frontend/ci/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/frontend/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
