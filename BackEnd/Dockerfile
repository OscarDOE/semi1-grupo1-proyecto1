FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=5000
EXPOSE 5000
CMD [ "npm", "start" ]


# docker build --pull --rm -f "Dockerfile" -t 7771512001/2s23-semi1-back-node:latest "./"
# docker push 7771512001/2s23-semi1-back-node:tagname
