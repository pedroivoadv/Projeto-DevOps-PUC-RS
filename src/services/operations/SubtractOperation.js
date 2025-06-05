import { OperationInterface } from "./OperationInterface";

export class SubtractOperation extends OperationInterface {
  execute(a, b) {
    return a - b;
  }
}