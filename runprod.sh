#!/bin/bash
screen -X quit
#cd /var/www/valera_k2000/frontend
#screen -dmS webfg npm run start-prod
cd ./backend
source py3/bin/activate
screen -dmS webbg gunicorn --bind 0.0.0.0:8080 --env DJANGO_SETTINGS_MODULE=valera_k2000.settings.prod valera_k2000.wsgi

