sudo docker build . -t localhost:32000/frontend:latest --build-arg BUILD_CMD=build-local-cluster

sudo docker push localhost:32000/frontend:latest