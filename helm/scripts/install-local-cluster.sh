microk8s kubectl create namespace test-devops
microk8s helm3 install -f ../values-local-cluster.yml -n test-devops test-devops ../