export const projectFilters = ['All work', 'Client work', 'Personal projects']

export const projects = [
  {
    number: '01',
    name: 'Samai Rum Map',
    category: 'Client work',
    type: 'Full stack web application',
    description:
      'An interactive product location map for Samai Distillery, supported by a responsive interface, database features, and an admin dashboard.',
    tags: ['Laravel', 'MySQL', 'Maps'],
    visual: 'samai',
  },
  {
    number: '02',
    name: 'Nexora Tech Store',
    category: 'Personal projects',
    type: 'E-commerce experience',
    description:
      'A technology storefront with a product catalog and a dedicated admin experience, built to explore a complete shopping flow.',
    tags: ['React', 'Vite', 'Express'],
    visual: 'nexora',
  },
  {
    number: '03',
    name: 'Smart Locker System',
    category: 'Personal projects',
    type: 'Operations platform',
    description:
      'A locker management application with user access, location management, usage tracking, and an admin dashboard.',
    tags: ['Laravel', 'MySQL', 'Dashboard'],
    visual: 'locker',
  },
]

export const skillGroups = [
  { title: 'Frontend', number: '01', skills: ['Vue.js', 'Nuxt.js', 'JavaScript', 'Responsive UI'] },
  { title: 'Backend', number: '02', skills: ['Laravel', 'Strapi', 'MySQL', 'CMS development'] },
  {
    title: 'Design & workflow',
    number: '03',
    skills: ['Figma', 'Photoshop', 'Illustrator', 'Documentation'],
  },
]
