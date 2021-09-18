backend_folder := "server"
frontend_folder := "frontend"

# Run the servers in development mode.
default:
    #!/usr/bin/env bash
    { cd "{{frontend_folder}}" && yarn run serve & \
      cd "{{backend_folder}}" && yarn run start:dev; }

# Setup the dependencies for all the micro-services.
setup:
    #!/usr/bin/env bash
    yarn install

# Seed the database with fake data
db-seed:
    #!/usr/bin/env bash
    cd "{{backend_folder}}" && yarn prisma db push && yarn prisma db seed
