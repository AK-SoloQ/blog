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

Multiple container run on one operation system on virtual physical machine, All containers share the operation system, Containers are isolated (cannot interfere with each other, Own file system/data , own networking )

##### Containers

Containers have all the good properties of VMs

- Come complete with alll files and data that you need to run

- Multiple copies can be run on the same machine or different machine => Scalable.

- Same image can run on a personal machine, in a data center or in a cloud

- Operation system resources can be restricted or unrestricted as designed at container build time

- Isolation, command in a container will show only the processes in the container.

- Can be stopped. saved and moved to another machine or for later run.

####  Docker and containers

Provides the isolation among container, helps them share the OS, Docker is dock worker => Manage containers, Developed initially by Docker.com, Downloadable for Linux, Windos and Mac.

Docker Engine Runtime
