set dotenv-load := true

backend_folder := "server"
frontend_folder := "frontend"

# Run the servers in development mode.
default:
    { just run-frontend & just run-server; }

# Run the frontend webapp server
run-frontend:
    cd "{{frontend_folder}}" && yarn run serve

# Run the backend server
run-server:
    cd "{{backend_folder}}" && yarn run start:dev

# Setup the dependencies for all the micro-services.
setup:
    yarn install --frozen-lockfile

# Seed the database with fake data
db-seed:
    cd "{{backend_folder}}" && yarn prisma db push && yarn prisma db seed

# build the project for production
build-prod:
    #!/bin/sh
    cd "{{backend_folder}}"
    yarn run build
