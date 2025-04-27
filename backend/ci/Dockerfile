FROM python:3.12

RUN apt-get update && \
    apt-get install -y --no-install-recommends  \
    libpq-dev  python3-dev cmake locales locales-all \
    libreoffice libreoffice-calc libxml2 libxml2-dev libxslt-dev fontconfig libgdal-dev gdal-bin

ENV PIP_NO_CACHE_DIR=off \
  PYTHONUNBUFFERED=1 \
  TZ=Europe/Moscow

COPY . /usr/src/app

WORKDIR /usr/src/app

COPY requirements.txt ./requirements.txt

RUN pip3 install -r requirements.txt

EXPOSE 8000
