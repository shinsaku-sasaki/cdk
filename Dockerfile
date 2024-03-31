# Node 20対応版
FROM node:lts-alpine3.19

WORKDIR /src

# install the latest nodejs & npm
RUN apk update && apk add curl unzip

# install the latest AWS CDK
RUN npm install -g aws-cdk

# install the latest AWSCLI
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip && ./aws/install
