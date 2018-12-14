#!/bin/bash
source py3/bin/activate
python manage.py runserver 0.0.0.0:8080 --settings=valera_k2000.settings.dev
#gunicorn --bind 0.0.0.0:8080 --env DJANGO_SETTINGS_MODULE=valera_k2000.settings.prod valera_k2000.wsgi
