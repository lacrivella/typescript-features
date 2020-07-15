class Boat {
  color: string = 'blue';

  get formattedColor(): string {
    return `This boat is painted ${this.color}`;
  }

  @logError('Uh-oh! Boat hit an iceberg.')
  pilot(): void {
    throw new Error();
    console.log('swish swash');
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().pilot();
