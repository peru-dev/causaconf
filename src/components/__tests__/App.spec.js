import App from '../App';

describe('App', () => {
  it('should be a function', () => {
    expect(typeof App).toBe('function');
  });

  it('should return an HTMLElement', () => {
    const el = App({ speakers: [], sponsors: [], tiers: [] });
    expect(el instanceof HTMLElement).toBe(true);
    console.log(el);
  });
});
