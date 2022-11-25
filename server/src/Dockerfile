FROM python:alpine

RUN apk --no-cache add build-base
RUN apk --no-cache add postgresql-dev

WORKDIR /root/src

COPY . .

RUN pip install -r requirements.txt

CMD ["python", "main.py"]
