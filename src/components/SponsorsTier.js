import { createElement } from 'nano';
import Sponsor from './Sponsor';


export default ({ title, sponsors, size }) => createElement('div', {
  className: 'sponsor-tier',
  children: [
    createElement('h3', { innerText: title }),
    createElement('div', {
      children: sponsors.map(sponsor => Sponsor({ sponsor, size })),
    }),
  ],
});
