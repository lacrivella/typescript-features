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
  console.log('Ta-ta-ta-targeeeeet: ', target);
  console.log('Key: ', key);
}
