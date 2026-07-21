import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('should return an empty string when the input is undefined', () => {
    const pipe = new EllipsisPipe();

    expect(pipe.transform(undefined as any)).toBe('');
  });
});
