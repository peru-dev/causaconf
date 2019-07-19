import { createElement } from 'nano';


export default ({ topics, delay }) => {
  const topic = createElement('span', {
    id: 'tema',
    innerText: 'desarrollo web',
  });

  const next = (curr) => {
    topic.innerText = topics[curr];
    setTimeout(() => next(curr >= topics.length - 1 ? 0 : curr + 1), delay);
  };

  setTimeout(() => next(0), delay);

  return createElement('section', {
    id: 'top',
    children: [
      createElement('header', {
        children: [
          createElement('h1', { innerText: 'CausaConf' }),
          createElement('p', { innerText: 'Una conferencia sobre' }),
          createElement('p', { children: [topic] }),
          createElement('p', { innerHTML: '23/24 Nov, 2019<br />Lima, Perú' }),
          createElement('a', {
            className: 'button',
            href: 'https://ti.to/peru-dev/causa-conf-2019',
            innerText: 'Compra tu ticket',
          }),
        ],
      }),
    ],
  });
};
