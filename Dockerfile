FROM scratch as dependencies
WORKDIR /projectFiles
COPY yarn.lock package.json justfile ./
COPY server/package.json ./server/
COPY frontend/package.json  ./frontend/

FROM node:17
RUN apt-get update && apt-get -y upgrade ;\
    apt-get install -y bash curl python3 python3-pip ;\
    curl --proto '=https' --tlsv1.2 -sSf https://just.systems/install.sh | bash -s -- --to /usr/bin ; \
    pip3 install click google-cloud-automl
ARG DATABASE_URL
ARG GCP_CREDENTIALS
WORKDIR /usr/src/app
COPY --from=dependencies /projectFiles ./
RUN just setup
COPY . .
RUN just build-prod
ENV NODE_ENV=production \
    CI=1 \
    GOOGLE_APPLICATION_CREDENTIALS="/key.json" \
    PORT=${PORT} \
    DATABASE_URL=${DATABASE_URL} \
    GCP_CREDENTIALS=${GCP_CREDENTIALS}
RUN echo ${GCP_CREDENTIALS} > ${GOOGLE_APPLICATION_CREDENTIALS}
CMD [ "just", "start-prod" ]

