// lib/shapes.js
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }

  class Triangle extends Shape {
    render() {
      return `<polygon points="150,50 100,100 200,100" fill="${this.color}" />`;
    }
  }
  
  // Export the classes
  module.exports = {
    Circle,
    Square,
    Triangle,
    };
  