export interface AbstractNode {
  next?: AbstractNode | null;
  prev?: AbstractNode | null;
}

export class Node<T> implements AbstractNode {
  public value: T;
  public next: AbstractNode | null;
  public prev: AbstractNode | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DummyHeadNode implements AbstractNode {
  public next: AbstractNode | null;

  constructor() {
    this.next = null;
  }
}

export class DummyTailNode implements AbstractNode {
  public prev: AbstractNode | null;

  constructor() {
    this.prev = null;
  }
}
