FROM python:3.12

ENV PIP_NO_CACHE_DIR=off \
  PYTHONUNBUFFERED=1 \
  TZ=Europe/Moscow

COPY . /usr/src/app

WORKDIR /usr/src/app

COPY requirements.txt ./requirements.txt
COPY wheels ./wheels

RUN pip install --no-index --find-links=./wheels -r requirements.txt


EXPOSE 8000
