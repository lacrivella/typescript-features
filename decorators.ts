class Boat {
  color: string = 'blue';

  get formattedColor(): string {
    return `This boat is painted ${this.color}`;
  }

  pilot(): void {
    console.log('swish swash');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Ta-ta-ta-targeeeeet: ', target);
  console.log('Key: ', key);
}
