// lib/shapes.test.js
const { Circle, Square, Triangle } = require('./shapes');

test('Circle renders correct SVG', () => {
  const circle = new Circle("blue");
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('Square renders correct SVG', () => {
  const square = new Square("red");
  expect(square.render()).toBe('<rect x="50" y="50" width="100" height="100" fill="red" />');
});

test('Triangle renders correct SVG', () => {
  const triangle = new Triangle("green");
  expect(triangle.render()).toBe('<polygon points="150,50 100,100 200,100" fill="green" />');
});
