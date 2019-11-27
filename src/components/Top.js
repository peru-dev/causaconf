import createElement from '../lib/createElement';


export default ({ topics, delay }) => {
  const topic = createElement('span', {
    id: 'tema',
    textContent: 'desarrollo web',
  });

  const next = (curr) => {
    topic.textContent = topics[curr];
    setTimeout(() => next(curr >= topics.length - 1 ? 0 : curr + 1), delay);
  };

  setTimeout(() => next(0), delay);

  return createElement('section', {
    id: 'top',
    children: [
      createElement('header', {
        children: [
          createElement('h1', { textContent: 'CausaConf' }),
          createElement('p', { textContent: 'Una conferencia sobre' }),
          createElement('p', { children: [topic] }),
          createElement('p', {
            children: [
              createElement('div', { textContent: 'Jun 2020' }),
              // createElement('a', {
              //   href: 'https://goo.gl/maps/LE3Qp5nKS6rQU1pG9',
              //   textContent: 'Auditorio UTEC',
              // }),
              createElement('div', { textContent: 'Lima, Perú' }),
            ],
          }),
          createElement('a', {
            className: 'button',
            href: 'https://ti.to/peru-dev/causa-conf-2020',
            textContent: 'Compra tu ticket',
          }),
        ],
      }),
    ],
  });
};
