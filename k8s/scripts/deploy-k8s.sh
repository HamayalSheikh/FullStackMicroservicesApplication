#!/bin/bash

echo "Applying ConfigMaps and Secrets..."
kubectl apply -f k8s/backend-configmap.yaml
kubectl apply -f k8s/auth-configmap.yaml
kubectl apply -f k8s/auth-secret.yaml
kubectl apply -f k8s/auth-deployment.yaml

echo "Applying Postgres PVC and Deployment..."
kubectl apply -f k8s/postgres-persistent-volume.yaml
kubectl apply -f k8s/postgres-persistent-volume-claim.yaml
kubectl apply -f k8s/postgres-deployment.yaml
kubectl apply -f k8s/postgres-service.yaml
kubectl apply -f k8s/postgres-init-configmap.yaml

echo "Applying Backend..."
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml

echo "Applying Frontend..."
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml

echo "✅ All services deployed successfully!"
