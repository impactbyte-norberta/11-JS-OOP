// Exercise 1 and 2
class TwoDimentionalFigure {
    constructor(width, height, diameter, side, base) {
        this.width = width;
        this.height = height;
        this.diameter = diameter;
        this.side = side;
        this.base = base;
    }

    squareArea() {
        return this.side * this.side;
    }

    squareAround() {
        return 4 * this.side;
    }

    rectangleArea() {
        return this.width * this.height;
    }

    rectangleAround() {
        let widhtTimesTwo = 2 * this.width;
        let heightTimesTwo = 2 * this.height;
        return widhtTimesTwo + heightTimesTwo;
    }

    triangleArea() {
        return (this.base * this.height) / 2;
    }

    triangleAround() {
        let heightSquare = this.height ** 2;
        let baseSquare = this.base ** 2;
        let diagonal = Math.pow(heightSquare + baseSquare, 0.5);

        return this.height + this.base + diagonal;
    }

    circleArea() {
        return Math.PI * (this.diameter / 2);
    }

    circleAround() {
        return Math.PI * this.diameter;
    }
}

class MultiDimentionalFigure extends TwoDimentionalFigure {
    constructor(width, height, diameter, side, length) {
        super(width, height, diameter, side);

        this.length = length;
    }

    cubeVolume() {
        return Math.pow(this.side, 3);
    }

    cubeArea() {
        return 6 * Math.pow(this.side, 2);
    }

    cubeAround() {
        return 12 * this.side;
    }

    rectangleVolume() {
        return this.width * this.height * this.length;
    }

    rectangleArea() {
        return (
            2 * this.width * this.height +
            2 * this.width * this.length +
            2 * this.height * this.length
        );
    }

    rectangleAround() {
        return 4 * this.height + 4 * this.width + 4 * this.length;
    }
}

const square = new TwoDimentionalFigure(null, null, null, 5);
console.log(square.squareArea());
console.log(square.squareAround());

const rectangle = new TwoDimentionalFigure(4, 5);
console.log(rectangle.rectangleArea());
console.log(rectangle.rectangleAround());

const triangle = new TwoDimentionalFigure(null, 4, null, null, 3);
console.log(triangle.triangleArea());
console.log(triangle.triangleAround());

const circle = new TwoDimentionalFigure(null, null, 7, null, null);
console.log(circle.circleArea());
console.log(circle.circleAround());

const cube = new MultiDimentionalFigure(null, null, null, 4);
console.log(cube.cubeVolume());
console.log(cube.cubeArea());
console.log(cube.cubeAround());

// rectangeVol --> balok
const rectangleVol = new MultiDimentionalFigure(3, 4, null, null, 5);
console.log(rectangleVol.rectangleVolume());
console.log(rectangleVol.rectangleArea());
console.log(rectangleVol.rectangleAround());
