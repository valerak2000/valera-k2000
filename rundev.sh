#!/bin/bash
cd /var/www/valera_k2000/backend
source py3/bin/activate
screen -dmS webbg python manage.py runserver 0.0.0.0:8080 --settings=valera_k2000.settings.dev
cd ../frontend
screen -dmS webfg npm run dev
#forever npm run dev >> logfile.log
