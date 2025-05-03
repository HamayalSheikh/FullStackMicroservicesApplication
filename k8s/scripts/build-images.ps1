#!/bin/bash

Write-Host "Applying ConfigMaps and Secrets..."

kubectl apply -f k8s/auth-secret.yaml
kubectl apply -f k8s/auth-deployment.yaml

Write-Host "Applying Postgres PVC and Deployment..."
kubectl apply -f postgres-persistent-volume.yaml
kubectl apply -f postgres-persistent-volume-claim.yaml
kubectl apply -f postgres-deployment.yaml
kubectl apply -f postgres-service.yaml
kubectl apply -f postgres-init-configmap.yaml

Write-Host "Applying Backend..."
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml

Write-Host "Applying Frontend..."
kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml

Write-Host "✅ All services deployed successfully!"
