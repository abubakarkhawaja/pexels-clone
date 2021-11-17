FROM python:3

ENV PYTHONUNBUFFERED 1
RUN mkdir /backend
WORKDIR /backend
COPY . /backend/
RUN pip install Django
RUN pip install djangorestframework
RUN pip install django-cors-headers
CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]