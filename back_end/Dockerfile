FROM python:3.8.5
WORKDIR /app
ADD requirements.txt /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN apt-get update && apt-get install -y sudo
RUN sudo apt-get install -y libgl1-mesa-glx

#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"] ## gunicorn 쓰면 필요 X
# line 6~7 : opencv 사용할 경우
