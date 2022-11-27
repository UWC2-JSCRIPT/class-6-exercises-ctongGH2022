/**
 * Cecilia Tong
 * Class 5 Exercise & Homework
 * Nov 22, 2022
 * Car Prototype
 */

/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor(model) {
        this.currentSpeed = 0;
        this.model = model;
    }

    //accelerate function
    accelerate() {
        this.currentSpeed++;
    }

    //brake function
    brake() {
        this.currentSpeed--;
    }

    //toString function
    toString() {
        return (`This model of ${this.model} is running at speed ${this.currentSpeed}`);
    }
}

// Create an instance, accelerate twice, brake once, and console log the instance.toString()
const carNum1 = new Car('Toyota');
carNum1.accelerate();
carNum1.accelerate();
carNum1.brake();
console.log(carNum1.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car {
    constructor(model) {
        super(model);
        this.motor = 'electric';
    }

    //accelerate function for ElectricCar
    accelerate() {
        //calling accelerate() from Car twice
        super.accelerate();
        super.accelerate();
    }
    //toString function for ElectricCar
    toString() {
        return `${this.model} with ${this.motor} motor is running at speed ${this.currentSpeed}`;
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const eCar = new ElectricCar('Tesla');
eCar.accelerate();
eCar.accelerate();
eCar.brake();
console.log(eCar.toString());