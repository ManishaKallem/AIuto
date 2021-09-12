FROM gitpod/workspace-postgres

RUN curl --proto '=https' --tlsv1.2 -sSf https://just.systems/install.sh | sudo bash -s -- --to /usr/bin

ENV DATABASE_URL=postgresql://gitpod@localhost/server_db
ENV JWT_SECRET=pqJiVgORTeBBNOsvAveWFkdqkxGxlUeNNYuQipiuwGwcTcyKki
ENV JWT_EXPIRES_IN=3600s
ENV NODE_ENV=developmen
