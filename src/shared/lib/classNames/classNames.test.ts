import { classNames } from './classNames';

describe('className', () => {
  test('with only first param', () => {
    const expected = 'class';
    expect(classNames('class')).toBe(expected);
  });

  test('with additional first param', () => {
    const expected = 'class class1 class2';
    expect(classNames('class', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods true first param', () => {
    const expected = 'class class1 class2 hovered focus';
    expect(
      classNames('class', { hovered: true, focus: true }, ['class1', 'class2'])
    ).toBe(expected);
  });

  test('with mods false first param', () => {
    const expected = 'class class1 class2 hovered';
    expect(
      classNames('class', { hovered: true, focus: false }, ['class1', 'class2'])
    ).toBe(expected);
  });

  test('with mods undefined first param', () => {
    const expected = 'class class1 class2 hovered';
    expect(
      classNames('class', { hovered: true, focus: undefined }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });
});
