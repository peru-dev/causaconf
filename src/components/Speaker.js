import { createElement } from 'nano';


const SpeakerAvatar = ({ speaker }) => (
  (speaker.avatar)
    ? createElement('img', {
      className: 'avatar',
      src: speaker.avatar,
      alt: speaker.name,
    })
    : createElement('div', {
      className: 'avatar',
      innerText: '?',
    })
);


export default ({ speaker }) => createElement('a', {
  href: speaker.twitter ? `https://twitter.com/${speaker.twitter}` : '#',
  children: [
    SpeakerAvatar({ speaker }),
    createElement('h3', { innerText: speaker.name }),
    speaker.twitter && createElement('p', { innerText: `@${speaker.twitter}` }),
  ],
});
