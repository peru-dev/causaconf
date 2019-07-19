import { createElement } from 'nano';


export default () => {
  const navToggle = createElement('a', {
    href: '#',
    innerText: '☰',
  });

  const navUl = createElement('ul', {
    children: [
      { href: '#top', innerText: 'Inicio' },
      { href: '#speakers', innerText: 'Speakers' },
      { href: '#sponsors', innerText: 'Sponsors' },
      { href: '#tickets', innerText: 'Tickets' },
    ].map(item => createElement('li', {
      children: [createElement('a', item)],
    })),
  });

  navToggle.addEventListener('click', () => {
    navUl.classList.toggle('open');
  });

  navUl.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navUl.classList.remove('open');
    }
  });

  return createElement('nav', {
    children: [navToggle, navUl],
  });
};
