FROM pytorch/pytorch:1.7.1-cuda11.0-cudnn8-runtime
WORKDIR /app
ADD requirements.txt /app/
RUN pip install --upgrade pip
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    'ffmpeg' \
    'libsm6' \
    'libxext6' \
    && \
    rm -rf /var/lib/apt/lists
RUN pip install -r requirements.txt

#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"] ## gunicorn 쓰면 필요 X
