const PAGES = [
  { name: 'Home', type: 'simple', path: '/' },
  { name: 'Docker', type: 'simple', path: '/docker' },
  { name: 'Compose', type: 'simple', path: '/compose' },
  { name: 'React', type: 'simple', path: '/react' },
  { name: 'NodeJS', type: 'simple', path: '/node-js' },
  /* {
    name: 'DevOps',
    type: 'dropdown',
    menus: ['Compose', 'Vagrant', 'Ansible', 'Swarm']
  }, */
  { name: 'Outils', type: 'dropdown', menus: [{ name: 'Git', path: '/git' }, { name: 'Ansible', path: '/ansible' }] },
  { name: 'Contact', type: 'simple', path: '/contact' }
]
export default PAGES
