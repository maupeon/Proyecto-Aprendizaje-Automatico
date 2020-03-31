FROM python:3.7-alpine

RUN apk update

WORKDIR /usr/src/app
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

# Add application code.
COPY . ./

# Start app
CMD [ "python", "./api.py" ]