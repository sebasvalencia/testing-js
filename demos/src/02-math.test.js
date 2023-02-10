const {
  sum,
  multiply,
  divide,
  secondsConverter,
  promedio,
  cylinderVol,
} = require('./02-math');

test('add 1 + 3 to equal 4', () => {
  const response = sum(1, 3);
  expect(response).toBe(4);
});

test('should add 2 * 3 to equal 6', () => {
  const response = multiply(2, 3);
  expect(response).toBe(6);
});

test('should add 4 / 2 to equal 2', () => {
  const response = divide(4, 2);
  expect(response).toBe(2);
});

test('should divide by zero', () => {
  const response = divide(6, 0);
  expect(response).toBeNull();
  const responseSecond = divide(5, 0);
  expect(responseSecond).toBeNull();
});

test('should convert seconds to hours, minutes, seconds', () => {
  const response1 = secondsConverter(3600);
  expect(response1).toBe('1:0:0');

  const response2 = secondsConverter(3700);
  expect(response2).toBe('1:1:1');

  const response3 = secondsConverter(0);
  expect(response3).toBe('0:0:0');
});

test('', () => {
  const response = cylinderVol(2, 3);
  expect(response).toBe(38);
});

test('should return null', () => {
  const response = promedio([]);
  expect(response).toBe(null);
});

test('should return null', () => {
  const response = promedio([]);
  expect(response).toBe(null);
});

test('should return 3', () => {
  const response = promedio([1, 2, 3, 4, 5]);
  expect(response).toBe(3);
});
