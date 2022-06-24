import { DiscountPipe } from './discount.pipe';

describe('DiscountPipe', () => {
  it('create an instance', () => {
    const pipe = new DiscountPipe();
    expect(pipe).toBeTruthy();
  });

  it('should give discount', () => {
    const pipe = new DiscountPipe();
    expect(pipe.transform(100, 10)).toEqual(90);
  })
});
