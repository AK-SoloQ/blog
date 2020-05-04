const PAGES = [
  { name: "Home", type: "simple" },
  { name: "Front-End", type: "simple" },
  { name: "Back-End", type: "simple" },
  {
    name: "DevOps",
    type: "dropdown",
    menus: ["Docker", "Compose", "Vagrant", "Ansible", "Swarm"],
  },
  { name: "Outils", type: "dropdown", menus: ["Git", "Fail2abn"] },
  { name: "Contact", type: "simple" },
];
export default PAGES;
