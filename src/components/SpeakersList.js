import createElement from '../lib/createElement';
import Speaker from './Speaker';


export default ({ speakers }) => createElement('section', {
  id: 'speakers',
  children: [
    createElement('h2', { innerText: 'Speakers' }),
    createElement('div', {
      children: speakers.map(speaker => Speaker({ speaker })),
    }),
    createElement('a', {
      className: 'button',
      href: 'https://forms.gle/MBj2p47krnFuNE1m9',
      innerText: 'Envía una propuesta de charla',
    }),
  ],
});
