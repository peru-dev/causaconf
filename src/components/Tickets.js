import createElement from '../lib/createElement';


export default () => createElement('section', {
  id: 'tickets',
  children: [
    createElement('h2', {
      innerText: 'Tickets',
    }),
    createElement('div', {
      children: [
        createElement('a', {
          className: 'button',
          href: 'https://ti.to/peru-dev/causa-conf-2020',
          innerText: 'Compra tu ticket',
        }),
      ],
    }),
  ],
});
