export class CalculatorService {
  constructor(operation) {
    this.operation = operation;
  }

  calculate(a, b) {
    return this.operation.execute(a, b);
  }
}