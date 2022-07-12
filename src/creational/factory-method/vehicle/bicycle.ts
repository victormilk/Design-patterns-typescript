import { Vehicle } from './vehicle';

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} is going to ${customerName}`);
  }

  stop(): void {
    console.log(`${this.name} stopped`);
  }
}
