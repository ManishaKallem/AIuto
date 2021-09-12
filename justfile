backend_folder := "server"

# Run the servers in development mode.
default:
    #!/usr/bin/env bash
    { cd "{{backend_folder}}" && pnpm run start:dev; }

# Setup the dependencies for all the micro-services.
setup:
    #!/usr/bin/env bash
    cd "{{backend_folder}}" && pnpm install && pnpm prisma db push

# Seed the database with fake data
db-seed:
    #!/usr/bin/env bash
    cd "{{backend_folder}}" && pnpm prisma db seed

