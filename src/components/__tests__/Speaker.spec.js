import Speaker from '../Speaker';

describe('Speaker', () => {
  it('should render speaker with missing data', () => {
    const el = Speaker({
      speaker: {
        name: 'Someone',
      },
    });

    expect(el instanceof HTMLAnchorElement).toBe(true);
    expect(el.getAttribute('href')).toBe('#');
    expect(el.children.length).toBe(2);

    expect(el.children[0] instanceof HTMLDivElement).toBe(true);
    expect(el.children[0].innerText).toBe('?');

    expect(el.children[1] instanceof HTMLHeadingElement).toBe(true);
    expect(el.children[1].innerText).toBe('Someone');
  });

  it('should render speaker with missing avatar', () => {
    const el = Speaker({
      speaker: {
        name: 'Someone',
        twitter: 'someone',
      },
    });

    expect(el instanceof HTMLAnchorElement).toBe(true);
    expect(el.getAttribute('href')).toBe('https://twitter.com/someone');
    expect(el.children.length).toBe(3);

    expect(el.children[0] instanceof HTMLDivElement).toBe(true);
    expect(el.children[0].innerText).toBe('?');

    expect(el.children[1] instanceof HTMLHeadingElement).toBe(true);
    expect(el.children[1].innerText).toBe('Someone');

    expect(el.children[2] instanceof HTMLParagraphElement).toBe(true);
    expect(el.children[2].innerText).toBe('@someone');
  });

  it('should render speaker with complete data', () => {
    const el = Speaker({
      speaker: {
        name: 'Someone',
        twitter: 'someone',
        avatar: 'https://media.giphy.com/media/XTQZjxl8BW0QE/200w_d.gif',
      },
    });
    expect(el instanceof HTMLAnchorElement).toBe(true);
    expect(el.getAttribute('href')).toBe('https://twitter.com/someone');
    expect(el.children.length).toBe(3);

    expect(el.children[0] instanceof HTMLImageElement).toBe(true);
    expect(el.children[0].src).toBe('https://media.giphy.com/media/XTQZjxl8BW0QE/200w_d.gif');
    expect(el.children[0].alt).toBe('Someone');
    expect(el.children[0].className).toBe('avatar');

    expect(el.children[1] instanceof HTMLHeadingElement).toBe(true);
    expect(el.children[1].innerText).toBe('Someone');

    expect(el.children[2] instanceof HTMLParagraphElement).toBe(true);
    expect(el.children[2].innerText).toBe('@someone');
  });
});
