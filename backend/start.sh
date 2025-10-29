#!/bin/bash
# Wait for postgres to be ready
echo "Waiting for postgres..."
while ! python -c "import psycopg2; psycopg2.connect('${DATABASE_URL}')" 2>/dev/null; do
  sleep 1
done
echo "PostgreSQL started"

# Run migrations
python manage.py migrate --noinput

# Start server
gunicorn ghostpavilion_backend.wsgi --bind 0.0.0.0:$PORT
