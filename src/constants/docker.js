const DOCKER = {
  title: "Container Usage",
  plans: [
    "What is  a container and why?",
    "Docker and containers",
    "Docker command line",
    "Connect container to docker networks",
    "Manage container storage with volumes",
    "create Dockerfiles and build images",
  ],
  images: [
    {
      path:
        "https://images.unsplash.com/photo-1510681916233-314f497f3301?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Container",
    },
  ],
  sections: [
    {
      bigTitle_1: "What is a Container and why?",
      title_1: "Advantages of Virtualization",
      list_1: [
        "Minimize hardware costs",
        "Mutliple virtual servers on one physical hardware",
        "Easily move VMs to other data centers",
        "Conserve power",
        "Simpifier provisioning adminisitration of hardware and software",
        "Scalability and Flexibility",
      ],
      title_2: "Problems of Virtualization",
      par_1: "Each Vm requires an operation system (OS)",
      list: [
        "Each Os requires a licence",
        "Each OS has its own compute and storage overhead",
        "Needs maitenance , updates",
      ],
      par_2:
        " the solution is `Containers`, run many apps in the same virtual machine, these apps share the os and its overhead, but these apps can't access each other's resources without explicit permission.",
      par_3:
        "Multiple container run on one operation system on virtual physical machine, All containers share the operation system, Containers are isolated (cannot interfere with each other, Own file system/data , own networking )",
      title_4: "Containers",
      par_4: "Containers have all the good properties of VMs",
      list_2: [
        "Come complete with alll files and data that you need to run ",
        "Multiple copies  can be run on the same machine or different machine => Scalable.",
        "Same image can run on a personal machine, in a data center or  in a cloud",
        "Operation system resources can be restricted or unrestricted as designed at container build time",
        "Isolation, command in a container will show only the processes in the container",
        "Can be stopped. saved and moved to another machine or for later run",
      ],
      title_5: "Docker And Containers",
      par_5:
        "Provides the isolation among container, helps them share the OS, Docker is dock worker => Manage containers, Developed initially by Docker.com, Downloadable for Linux, Windos and Mac.",
      par_6: "Docker Engine Runtime",
    },
  ],
};
export default DOCKER;
