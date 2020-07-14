class Boat {
  color: string = 'blue';

  get formattedColor(): string {
    return `This boat is painted ${this.color}`;
  }

  pilot(): void {
    console.log('swish swash');
  }
}
