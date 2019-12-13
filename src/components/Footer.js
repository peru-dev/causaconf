import createElement from '../lib/createElement';


export default () => createElement('footer', {
  children: [
    createElement('a', {
      href: 'https://es.confcodeofconduct.com/',
      target: '_blank',
      rel: 'noopener',
      innerText: 'Código de conducta',
    }),
    createElement('div', {
      innerText: `🄯 ${(new Date()).getFullYear()} Perú Dev`,
    }),
  ],
});
