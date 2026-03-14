
Docker Brown Bag Session
========================

Why Docker?
-----------
Docker solves the classic "works on my machine" problem by providing a consistent and isolated environment for running applications. Containers ensure that an application and all its dependencies are packaged together so it behaves the same across development, testing, and production.

Benefits:

- Consistency and isolation
- Faster startup time compared to virtual machines
- Lightweight resource usage
- Portability across systems and clouds
- Easy scaling and deployment
- Improved developer productivity


Docker?
-------
Docker is a containerization platform that allows you to build, package, distribute, and run applications inside isolated containers. It includes:

- Docker Engine (runtime)
- Docker CLI (command-line interface)
- Docker Hub and other registries
- Dockerfile support
- Networking and storage features

Docker simplifies deployment by making applications self-contained and environment‑agnostic.


Docker Image
------------
A Docker image is a read‑only template used to create containers. It contains:

- Application code
- OS-level files
- Runtime libraries
- Dependencies
- Configuration
- Environment variables

Key points:

- Images are immutable
- Built using a Dockerfile
- Stored in layers for efficiency
- Can be shared via registries


Docker Containers
-----------------
A Docker container is a running instance of a Docker image. Containers provide:

- An isolated environment
- Lightweight execution using shared OS kernel
- Fast startup and shutdown
- Controlled resource usage

Relationship:

Image → Container (runtime)


Dockerfile
----------
A Dockerfile is a text file that contains instructions to build a Docker image. Each instruction creates an image layer.

Common instructions:

::

    FROM        # Base image
    WORKDIR     # Set working directory
    COPY        # Copy files into the image
    RUN         # Execute commands during build
    ENV         # Set environment variables
    EXPOSE      # Document container port
    CMD         # Default command to execute
    ENTRYPOINT  # Fixed executable for container

A Dockerfile ensures repeatable, automated image builds.


Docker Registry
---------------
A Docker registry is a centralized system for storing and distributing Docker images.

Common registries:

- Docker Hub
- GitHub Container Registry
- Azure Container Registry
- Amazon ECR
- Google Artifact Registry
- Self-hosted registries

Typical workflow:

::

    Build image → Tag image → Push to registry → Pull → Run


Dockerfile Extensions
---------------------
Although the standard file name is simply Dockerfile, custom names and extensions are used in specific scenarios.

Examples:

- Dockerfile — default
- Dockerfile.dev — development configuration
- Dockerfile.prod — production build
- docker-compose.yml — multi-container definition
- docker-compose.override.yml — custom overrides
- .env — environment variables for Compose

Custom Dockerfile names are used via:

::

    docker build -f Dockerfile.dev .


Docker Commands
---------------
Basic Docker CLI commands are used to build, manage images, and operate containers.

Image commands:

::

    docker pull <image>
    docker images
    docker rmi <image>

Container commands:

::

    docker run <image>
    docker run -d -p 8080:80 <image>
    docker ps
    docker ps -a
    docker stop <container>
    docker rm <container>

Building and tagging images:

::

    docker build -t app:1.0 .
    docker tag app:1.0 repo/app:latest
    docker push repo/app:latest
    docker pull repo/app:latest

Debugging:

::

    docker logs <container>
    docker exec -it <container> sh
    docker inspect <container>

