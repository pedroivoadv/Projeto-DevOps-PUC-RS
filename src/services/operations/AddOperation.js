import { OperationInterface } from "./OperationInterface";

export class AddOperation extends OperationInterface {
  execute(a, b) {
    return a + b;
  }
}