docker build . -t localhost:32000/frontend:latest --build-arg BUILD_CMD=build-local-cluster

docker push localhost:32000/frontend:latest