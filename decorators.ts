class Boat {
  color: string = 'blue';

  get formattedColor(): string {
    return `This boat is painted ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
    console.log('swish swash');
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (err) {
      console.log('Oops! Boat hit an iceberg.');
    }
  };
}

new Boat().pilot();
