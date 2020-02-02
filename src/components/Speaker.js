import createElement from '../lib/createElement';

const SpeakerAvatar = ({ src, alt }) => (
  src
    ? createElement('img', {
        className: 'avatar',
        src,
        alt
      })
    : createElement('div', {
        className: 'avatar',
        innerText: '?'
      })
  );
export default ({ speaker }) =>
  createElement('a', {
    href: speaker.twitter ? `https://twitter.com/${speaker.twitter}` : '#',
    children: [
      SpeakerAvatar({
        alt: speaker.name,
        src: speaker.avatar
      }),
      createElement('h3', { innerText: speaker.name }),
      speaker.twitter &&
        createElement('p', { innerText: `@${speaker.twitter}` })
    ]
  });
