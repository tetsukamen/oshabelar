import { UsernamePipe } from './username.pipe';

describe('UsernamePipe', () => {
  it('create an instance', () => {
    const pipe = new UsernamePipe();
    expect(pipe).toBeTruthy();
  });

  it('shorten string which has more than 10 letters', () => {
    const pipe = new UsernamePipe();
    expect(pipe.transform('hellohellohello')).toBe('hellohello...');
  })
});
