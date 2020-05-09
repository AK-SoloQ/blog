# COMPOSE
-----
![docker-compose](https://user.oc-static.com/upload/2019/05/08/15573466889395_1_QVFjsW8gyIXeCUJucmK4XA.png)

## What's docker-compose?

compose is a tool for defining and running multicontainer Docker applications, with comppose , you use a YAML file to configure your application's services, then with a single command, you create and start all the services from your configuration.

Compose works in all environments: production, staging, development, testing, ass well as CI workflows

## Docker-compose use cases

Compose can be used in many different ways
- Developent environments: 
  + create and start  one or more containers for each dependency (databases, queues, caches, web service APIs, etc) with  a single  command.
- Automated testing environments:
  - create and destroy isolated testing environments in just a few commands.
- Cluster deployments:
  - Compose can deploy to a remote single docker Engine
  - The Docker Engine may be single instance provisioned with Docker Machine or an entire dokcer swarm cluster.

## Using compose

Using comose is basicalyy a three-step process:

- Define your app's environment with a Dockerfile so it can be reproduced anywhere
- Define the services that make up your app in docker-compose.yml so they can be run together in an isolated environment.
- Run docker-compose up and Conpose starts and runs your entire app.
