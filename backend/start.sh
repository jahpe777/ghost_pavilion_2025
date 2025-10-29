#!/bin/bash
python manage.py migrate --noinput
gunicorn ghostpavilion_backend.wsgi --bind 0.0.0.0:$PORT
