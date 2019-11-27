import createElement from '../lib/createElement';
import Nav from './Nav';
import Top from './Top';
import SpeakersList from './SpeakersList';
import SponsorsList from './SponsorsList';
import Tickets from './Tickets';


export default ({
  speakers,
  sponsors,
  tiers,
  topics,
}) => createElement('div', {
  className: 'App',
  children: [
    Nav(),
    Top({ topics, delay: 1000 }),
    SpeakersList({ speakers }),
    SponsorsList({ tiers, sponsors }),
    Tickets(),
  ],
});
