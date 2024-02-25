// lib/shapes.test.js
const { Circle, Square, Triangle } = require('./shapes');

test('Circle color change with setColor method', () => {
  const circle = new Circle("initialColor"); // Corrected to create an instance of Circle
  circle.setColor("blue");
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('Square color change with setColor method', () => {
  const square = new Square("initialColor");
  square.setColor("red");
  expect(square.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="red" />');
});

test('Triangle color change with setColor method', () => {
  const triangle = new Triangle("initialColor");
  triangle.setColor("blue");
  expect(triangle.render()).toEqual('<polygon points="150,50 100,100 200,100" fill="blue" />');
});
