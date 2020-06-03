FROM python:3.7-alpine

RUN apk update
RUN apk add gcc g++ make automake subversion gfortran musl-dev python3-dev

WORKDIR /usr/bin/local

COPY requirements.txt ./

RUN python3 -m pip install --upgrade pip
RUN pip3 install --no-cache-dir -r requirements.txt

# Add application code.
COPY . ./

# Start app
CMD [ "python3", "./api.py" ]
