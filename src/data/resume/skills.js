const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Frameworks, Platforms and Libraries'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Frameworks, Platforms and Libraries'],
  },
  {
    title: 'Heroku',
    competency: 4,
    category: ['Hosting'],
  },
  {
    title: 'MongoDB',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Express.JS',
    competency: 3,
    category: ['Frameworks, Platforms and Libraries'],
  },
  {
    title: 'Typescript',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C#',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Angular',
    competency: 5,
    category: ['Frameworks, Platforms and Libraries'],
  },
  {
    title: '.NET',
    competency: 3,
    category: ['Frameworks, Platforms and Libraries'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'NEO4J',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Mocha',
    competency: 5,
    category: ['Testing'],
  },
  {
    title: 'Jest',
    competency: 5,
    category: ['Testing'],
  },
  {
    title: 'Jasmine',
    competency: 4,
    category: ['Testing'],
  },
  {
    title: 'Cypress',
    competency: 4,
    category: ['Testing'],
  },
  {
    title: 'Azure',
    competency: 4,
    category: ['Hosting'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#FA3C4C',
  '#FF8479',
  '#43C6AC',
  '#485861',
  '#3CB9FA',
  '#515dd4',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
