set -e

# Wait for the Postgres service to become available
# ./wait-for-it.sh postgres:5432 -t 0 -- echo "Postgres is up"

# Start the main service
sleep 25
npm i && npm run start:dev
