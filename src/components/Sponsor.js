import createElement from '../lib/createElement';


export default ({ sponsor, size = 200 }) => createElement('a', {
  href: sponsor.url,
  children: [
    createElement('img', {
      className: 'avatar',
      src: sponsor.avatar,
      alt: sponsor.name,
      style: {
        width: `${size}px`,
        height: `${size}px`,
      },
      width: size,
      height: size,
    }),
    createElement('h4', {
      innerText: sponsor.name,
      style: {
        width: `${size + 50}px`,
      },
    }),
  ],
});
