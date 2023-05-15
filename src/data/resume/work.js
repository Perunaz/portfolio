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
    startDate: '2023-02-01',
    summary: `Inbisco creates management software to make it easy for businesses to see what's going on and how to improve existing workflows `,
  },
];

export default work;
