# Why Docker ?

Docker is preferred over Virtual Machines (VMs) for application deployment and management for several key reasons:

## Lightweight & Efficient

- **Containers share the host OS kernel**, unlike VMs which require a full OS. This makes Docker containers significantly smaller and faster to start.
- **Lower resource consumption** - no need to allocate separate CPU, memory, and storage for each container like you would for VMs.
- **Faster startup time** - containers start in seconds, while VMs can take minutes.

## Portability

- **Write once, run anywhere** - Docker containers run consistently across different environments (development, testing, production).
- **Eliminates "works on my machine" problem** - all dependencies are bundled within the container.

## Scalability

- **Easy horizontal scaling** - quickly spin up multiple container instances without the overhead of full VMs.
- **Better resource utilization** - run many more containers on the same hardware compared to VMs.

## Development & Deployment Speed

- **Faster development cycles** - developers can work in containerized environments identical to production.
- **Simplified deployment** - push images to registries and deploy anywhere without lengthy setup.
- **Easy rollback** - quickly revert to previous container versions.

## Cost Efficiency

- **Lower infrastructure costs** - fewer resources needed compared to VMs on the same hardware.
- **No licensing overhead** - no need to license multiple OS instances.

## DevOps & CI/CD

- **Seamless integration** with CI/CD pipelines for continuous integration and deployment.
- **Microservices architecture** - easier to implement and manage microservices with containers.

# What is Docker ?

Docker is an open-source containerization platform that packages applications and their dependencies into isolated, lightweight containers. These containers can run consistently across any environment.

## Key Concepts

### Container

A container is a standardized unit that bundles:

- Application code
- Runtime environment
- System libraries
- Dependencies
- Environment variables
- Configuration files

All packaged into a single executable unit that behaves the same regardless of where it runs.

### Docker Image

A Docker image is a blueprint or template that contains everything needed to create a container. It's:

- Immutable (read-only)
- Portable across systems
- Built in layers
- Versioned and tagged for easy management

### Docker Hub / Registry

A centralized repository where Docker images are stored and shared. Users can push images to registries or pull pre-built images (like Node.js, Python, Ubuntu, etc.).

### Docker Daemon

The background service that manages containers, images, networks, and storage on the host system.

## How Docker Works

1. **Build** - Create a Docker image from a Dockerfile (contains instructions for building the image)
2. **Ship** - Push the image to a registry for sharing
3. **Run** - Pull the image and create a container instance that executes the application

## Docker vs Traditional Deployment

| Aspect             | Docker Container | Traditional VM     |
| ------------------ | ---------------- | ------------------ |
| **Size**           | 10-100 MB        | 1-10 GB            |
| **Startup Time**   | Seconds          | Minutes            |
| **OS Overhead**    | Shared kernel    | Full OS per VM     |
| **Isolation**      | Process-level    | Machine-level      |
| **Resource Usage** | Lower            | Higher             |
| **Portability**    | Run anywhere     | Platform-dependent |

# Docker Instruction

| Instruction | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| ADD         | Add local or remote files and directories.                  |
| ARG         | Use build-time variables.                                   |
| CMD         | Specify default commands.                                   |
| COPY        | Copy files and directories.                                 |
| ENTRYPOINT  | Specify default executable.                                 |
| ENV         | Set environment variables.                                  |
| EXPOSE      | Describe which ports your application is listening on.      |
| FROM        | Create a new build stage from a base image.                 |
| HEALTHCHECK | Check a container's health on startup.                      |
| LABEL       | Add metadata to an image.                                   |
| MAINTAINER  | Specify the author of an image.                             |
| ONBUILD     | Specify instructions for when the image is used in a build. |
| RUN         | Execute build commands.                                     |
| SHELL       | Set the default shell of an image.                          |
| STOPSIGNAL  | Specify the system call signal for exiting a container.     |
| USER        | Set user and group ID.                                      |
| VOLUME      | Create volume mounts.                                       |
| WORKDIR     | Change working directory.                                   |

# Commands

## Common Docker Commands

| Command                                              | Description                                      |
| ---------------------------------------------------- | ------------------------------------------------ |
| `docker --version`                                   | Display Docker version information.              |
| `docker pull <image>`                                | Download an image from Docker Hub or a registry. |
| `docker push <image>`                                | Upload an image to Docker Hub or a registry.     |
| `docker build -t <name>:<tag> .`                     | Build a Docker image from a Dockerfile.          |
| `docker run <image>`                                 | Create and start a container from an image.      |
| `docker run -d <image>`                              | Run a container in detached mode (background).   |
| `docker run -p <host_port>:<container_port> <image>` | Map host port to container port.                 |
| `docker run -e <VAR>=<value> <image>`                | Set environment variables in a container.        |
| `docker run -v <host_path>:<container_path> <image>` | Mount a volume/directory.                        |
| `docker ps`                                          | List all running containers.                     |
| `docker ps -a`                                       | List all containers (running and stopped).       |
| `docker stop <container_id>`                         | Stop a running container gracefully.             |
| `docker stop <container_id>`                         | Forcefully stop a running container.             |
| `docker rm <container_id>`                           | Remove a stopped container.                      |
| `docker rmi <image_id>`                              | Remove a Docker image.                           |
| `docker logs <container_id>`                         | Display logs from a container.                   |
| `docker logs -f <container_id>`                      | Follow container logs in real-time.              |
| `docker exec -it <container_id> bash`                | Execute a command inside a running container.    |
| `docker inspect <container_id>`                      | Display detailed information about a container.  |
| `docker image ls`                                    | List all Docker images.                          |
| `docker tag <image>:<tag1> <image>:<tag2>`           | Create a new tag for an image.                   |
| `docker login`                                       | Log in to Docker Hub or a registry.              |
| `docker logout`                                      | Log out from Docker Hub or a registry.           |
| `docker network ls`                                  | List all Docker networks.                        |
| `docker network create <network_name>`               | Create a new Docker network.                     |
| `docker volume ls`                                   | List all Docker volumes.                         |
| `docker volume create <volume_name>`                 | Create a new Docker volume.                      |
| `docker compose up`                                  | Start services defined in docker-compose.yml.    |
| `docker compose down`                                | Stop and remove services.                        |
| `docker stats`                                       | Display resource usage statistics of containers. |
| `docker search <search_term>`                        | Search for images on Docker Hub.                 |
