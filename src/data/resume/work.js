/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Inbisco',
    position: 'Junior Software Developer',
    url: 'https://inbisco.com',
    startDate: '2023-02-00',
    summary: `Inbisco creates management software to make it easy for businesses to see what's going on and how to improve existing workflows `,
  },  
  {
    name: 'Bakker Sliedrecht',
    position: 'Intern Software Developer',
    url: 'https://www.bakkersliedrecht.com/',
    startDate: '2022-07-00',
    endDate: '2023-01-13',
    summary: `Bakker Sliedrecht makes sustainable and cost-effective electrical installations and automated systems mostly for ships`,
  },
];

export default work;
