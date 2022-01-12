sleep 1
cd LoremServer3
python manage.py migrate
nohup python manage.py runserver 0.0.0.0:8002 &
cd ..
sleep 1