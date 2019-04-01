# specify the node base image with your desired version node:<version>
FROM node:9

# run app on 3000
EXPOSE 3000


# In your Dockerfile.
WORKDIR dashboard
COPY . .

RUN yarn install

CMD yarn start