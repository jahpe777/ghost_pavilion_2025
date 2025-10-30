#!/bin/bash
set -e

echo "Running migrations..."
python manage.py migrate --noinput

echo "Starting server..."
gunicorn ghostpavilion_backend.wsgi --bind 0.0.0.0:$PORT
