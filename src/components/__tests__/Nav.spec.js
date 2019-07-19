import Nav from '../Nav';

describe('Nav', () => {
  it('should be a function', () => {
    expect(typeof Nav).toBe('function');
  });

  it('should return an HTMLElement with two children', () => {
    const el = Nav();
    expect(el instanceof HTMLElement).toBe(true);
    expect(el.children.length).toBe(2);
    expect(el.children[0] instanceof HTMLAnchorElement).toBe(true);
    expect(el.children[1] instanceof HTMLUListElement).toBe(true);
  });

  it('should not add .open class to list by default', () => {
    const el = Nav();
    expect(el.children.length).toBe(2);

    const navUl = el.children[1];
    expect(navUl instanceof HTMLUListElement).toBe(true);
    expect(navUl.classList.contains('open')).toBe(false);
  });

  it('should toggle list visibility', () => {
    const el = Nav();
    expect(el.children.length).toBe(2);

    const navToggle = el.children[0];
    const navUl = el.children[1];
    expect(navToggle instanceof HTMLAnchorElement).toBe(true);
    expect(navUl instanceof HTMLUListElement).toBe(true);

    expect(navUl.classList.contains('open')).toBe(false);

    navToggle.click();
    expect(navUl.classList.contains('open')).toBe(true);

    navToggle.click();
    expect(navUl.classList.contains('open')).toBe(false);
  });
});
