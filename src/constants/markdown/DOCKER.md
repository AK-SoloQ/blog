# Container Usage!
------

## What is a Container and why ?

### Advantange of Virtualization:

- Minimize harware costs
- Mutliple virtual servers on one physical hardware
- Easily move VMs to other data centers
- Conserve power
- Simpifier provisioning adminisitration of hardware and software
- Scalability and Flexibility

### Problems of Virtualization

Each Vm requires an operation system (OS)

the solution is `Containers`, run many apps in the same virtual machine, these apps share the os and its overhead, but these apps can't access each other's resources without explicit permission.

Multiple containers run on one operation system on virtual/physical machine. All containers share the operation system. Containers are isolated (cannot interfere with each other, Own file system/data , own networking )

## Containers

Containers have all the good properties of VMs

- Come complete with all files and data that you need to run

- Multiple copies can be run on the same machine or different machine => Scalable.

- Same image can run on a personal machine, in a data center or in a cloud

- Operation system resources can be restricted or unrestricted as designed at container build time

- Isolation, command in a container will show only the processes in the container.

- Can be stopped. saved and moved to another machine or for later run.

## Docker and containers

Provides the isolation among container, helps them share the OS, Docker is dock worker => Manage containers, Developed initially by Docker.com, Downloadable for Linux, Windos and Mac.

Docker Engine Runtime (Two Editions):

- Community Edition(CE): Free for experimentation.
- Entreprise Edition(EE): For deployment with paid support

written in `Go` programming language from google, now open source projet under mobyproject.org 

### Image Registries
containers are built from images and can be saves as images 

images are stored in registries

- Local registry on the same host.
- Docker Hub Registry: Globally shared.
- Private registry on Docker.com.

Any component not found in the local registry is downloaded from specified location.

Officilal docker registry images vetted by docker. Unofficial Registry: images not vetted.

Eaech images has several tags, each image is idenfified by its 256-bit hash.

### Layers

Each image has many layers, image is build layer by layer, layers in an image can be inspected by docker commands and each layer has its own 256-bit hash

layers can be shared among many containers

Fro example:

- Ubuntu Os is installed, then
- Python package is installed, then
- A security patch to the python is installed
  
Layers can be shared among many containers

## Dockerfile
Docker can build images automatically by reading the  instructions from a Dockerfile, a Dockerfile is a text document  that contains all the commands a user could call on the command line to assemble an image, Docker can build images automatically by reading the instructions form a Dockerfile.

``` docker
$ docker build {path}
```

Before the docker sends the context to the docker daemon; it looks for a file named `.dockerignore` in the root dircotry of the context. if this file exists the CLI modifies the context to exclude files and directories taht match patterns in it.

A Dockerfile must start with a `FROM` instruction

`FROM` instruction specifies the base image from which you are building.

`RUN` instruction will execute any commands in a new layer on top of the current images and commit the results

`ENTRYPOINT` allows you to configure a container that will run as an executable, for exp., the following will start nginx with its default content, listenign on port 80 : 

> docker run -it --rm  -p 80:80 nginx

Command line arguments to docker run <image> will be appended after all elments in an exec from ENTRYPOINT and will override all elemnts specifier using CMD.

 `CMD` provide defaults for an executing container, there can only be on CMD instruction in a  Dockerfile, if you list more than one CMD, only the lat CMD will take effect, the CMD instruction sets the command to be executed when running the image.
  

 `COPY` instruction copies new files or directories from <src> and adds them to the filesystem of the container at the path <dest>, files and directories will be interpreted as relative to the source of the context of the build.

 `ADD ` instruction copies new files, directories or remote file URLs from <src> and adds them to the filesystem of the image at the <dest>.

 `WORKDIR` instruction sets the working directory for any RUN,CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile.

 `EXPOSE` instruction informs Docker that the container listens on the specified network ports at runtime (BS: the EXPOSE instruction dons not actually publish the prot).

 `ENV` instruction sets the environment variable <key> to the value <value>, this value will be in the environment for all subsquent instructions in the build stage.

 `VOLUME` instruction creates a mount point with the specified name and marks it as holding externally mounted volumes from native host or other containers.

```javascript
FROM Alpine                         <--- Start with alpine Linux
LABEL exp@gmail.com                 <--- Who wrote this container
RUN apt -t nodejs                   <--- Use apt package to install nodejs
COPY ./src                          <--- Copy the app files from build context
WORKDIR /src                        <---- Set working directory
RUN npm install                     <--- install application dependencies
EXPOSE 8080                         <--- Open Port 8080
ENTRYPOINT [node, app.js]           <--- Main application to run
```

+ layer 1 `FROM Alpine`
+ layer 2 `Run apt...`
+ layer 3 `Copy ./src`
+ layer 4 `Run npm install`
+ WORKDIR, EXPOSE, ENTYPOINT result in tages, Others in layers


## Docker Networks

Docker's networking subsystem is pluggable, using drivers, to list all docker networks:

```sh
$ docker network ls 
```

serveral drivers exist by default , and provide core networking functionality:

- bridge: the default network driver.
- host: for standalone containers, remove network isolation between the cotainer and the docker host, and use the host's networking directly.
- Overlay: Connect multiple Docker daemons together  and enable swarm services to communicate with each other.

## Docker Storage

by default all files created inside a container are stored on a writable container layer (the data doesn't persist when theat container no longer exists)

So that the files are persisted event after the container stops, Docker has three options:

 - Volumes: stored in /var/lib/docker/volumes.
 - Bind mounts: stored anywhere on the host system.
 - tmpfs mounts: stored in the host system's memory only.

 Volumes  are  the preferred mechanism form persisting data generated and used by docker containers.