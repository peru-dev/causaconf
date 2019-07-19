import { createElement } from 'nano';


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
          href: 'https://ti.to/peru-dev/causa-conf-2019',
          innerText: 'Compra tu ticket',
        }),
      ],
    }),
  ],
});
