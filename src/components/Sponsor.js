import createElement from '../lib/createElement';


const createAvatar = (sponsor, size) => (
  sponsor.avatar
    ? createElement('img', {
      className: 'avatar',
      src: sponsor.avatar,
      alt: sponsor.name,
      style: {
        width: `${size}px`,
        height: `${size}px`,
      },
      width: size,
      height: size,
    })
    : createElement('div', {
      className: 'avatar',
      innerText: '?',
      style: {
        width: `${size}px`,
        height: `${size}px`,
      },
    })
);


export default ({ sponsor, size = 200 }) => createElement('a', {
  href: sponsor.url,
  children: [
    createAvatar(sponsor, size),
    createElement('h4', {
      innerText: sponsor.name,
      style: {
        width: `${size + 50}px`,
      },
    }),
  ],
});
