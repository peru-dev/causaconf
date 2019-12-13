import render from './lib/render';
import speakers from './data/speakers.json';
import sponsors from './data/sponsors.json';
import tiers from './data/tiers.json';
import topics from './data/topics.json';
import App from './components/App';


const withData = data => Component => props => Component({ ...props, ...data });


window.addEventListener('load', () => {
  render(
    withData({
      speakers,
      sponsors,
      tiers,
      topics,
    })(App),
    document.getElementById('root'),
  );

  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
});
