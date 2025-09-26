class Vehicle {
    constructor(brand, capacity) {
        this.brand = brand;
        this.capacity = capacity;

    }
    calculateFare() {
        console.log("  ");

    }
}

class Car extends Vehicle {
    constructor(brand, capacity, fare) {
        super(brand, capacity);
        this.fare = fare;
    }
    calculateFare() {
        console.log (this.brand + "(" + this.capacity+ "): " +  "Car fare: " + this.fare * 10);

    }

}

class MotorCycle extends Vehicle {
    constructor(brand, capacity, fare) {
        super(brand, capacity);
        this.fare = fare;
    }
    calculateFare() {
        console.log (this.brand + "(" + this.capacity+ "): " +  "Motorcycle fare: " + this.fare * 10);

    }
}

class Bus extends Vehicle {
    constructor(brand, capacity, fare) {
        super(brand, capacity);
        this.fare = fare;
    }
    calculateFare() {
        console.log (this.brand + "(" + this.capacity + "): " +  "Bus fare: " + this.fare * 10);

    }
}
var car = new Car("Toyota", "4 seats", 15);
car.calculateFare();
var motor = new MotorCycle("Yamaha", "2 seats", 10);
motor.calculateFare();
var bus = new Bus("Isuzu", "40 seats", 5);
bus.calculateFare();
