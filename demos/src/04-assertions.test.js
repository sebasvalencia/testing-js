// matchers

test('test an object', () => {
  const data = {
    name: 'sebas',
  };
  data.lastname = 'valencia';
  expect(data).toEqual({
    name: 'sebas',
    lastname: 'valencia',
  });
});

test('test an object', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('Booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('String', () => {
  expect('Chirstoph').toMatch(/stop/);
});

test('List', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});
