FROM python:alpine

WORKDIR /root/src

COPY . .
RUN apk add --no-cache gcc musl-dev linux-headers
RUN pip install --upgrade pip
RUN pip install Flask
RUN pip install line-bot-sdk

CMD ["python", "index.py"]