# Enterprise Backend Orchestration

> **Scalable Node.js microservice architecture powered by Kubernetes (K8s).**

This repository contains the production-grade orchestration logic and source code for the backend API. It leverages a cloud-native stack to ensure high availability, automated self-healing, and seamless traffic management.

---

## 🚀 System Architecture

The infrastructure is designed around three core pillars to ensure the service is resilient and accessible:

- **Orchestration:** Managed `Deployments` with rolling update strategies for zero-downtime.
- **Networking:** Cluster-internal `Services` (ClusterIP) for secure, stable discovery.
- **Edge Routing:** Layer 7 `Ingress` configuration for host-based SSL termination and routing.

---

## 🛠 Tech Stack

| Layer                | Technology                  |
| :------------------- | :-------------------------- |
| **Runtime**          | Node.js (Express Framework) |
| **Containerization** | Docker (Multi-stage builds) |
| **Orchestration**    | Kubernetes (K8s)            |
| **Traffic Control**  | NGINX Ingress Controller    |

---

## 📦 Kubernetes Configuration

Manifests are organized within the `/k8s` directory using a declarative approach[cite: 1]:

- **`deployment.yaml`**: Manages the Pod lifecycle, resource limits (CPU/Memory), and liveness/readiness probes[cite: 1].
- **`service.yaml`**: Abstracts the Pod IP addresses and provides a stable DNS endpoint within the cluster[cite: 1].
- **`ingress.yaml`**: Defines external entry points and maps traffic to the internal Service[cite: 1].

### Deployment Workflow

```bash
# 1. Build and tag the production image
docker build -t backend-service:pro-v1 .

# 2. Deploy the manifest stack
kubectl apply -f ./k8s/

# 3. Monitor the rollout status
kubectl rollout status deployment/backend-deployment
```
