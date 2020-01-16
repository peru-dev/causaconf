import createElement from '../lib/createElement';
import SponsorsTier from './SponsorsTier';


export default ({ tiers, sponsors }) => {
  const byTier = sponsors.reduce(
    (memo, sponsor) => ({
      ...memo,
      [sponsor.tier]: (
        (memo[sponsor.tier])
          ? memo[sponsor.tier].concat(sponsor)
          : [sponsor]
      ),
    }),
    {},
  );

  return createElement('section', {
    id: 'sponsors',
    children: [
      createElement('h2', { innerText: 'Sponsors' }),
      createElement('div', {
        children: tiers.map(({ id, title, size }) => SponsorsTier({
          title,
          sponsors: byTier[id],
          size,
        })),
      }),
      createElement('a', {
        className: 'button',
        href: 'https://forms.gle/7UxA1ynbDm7cN55B9',
        innerText: '¿Interesadx en patrocinar este evento?',
      }),
    ],
  });
};
