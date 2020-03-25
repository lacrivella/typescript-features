const villager = {
  name: 'bob',
  age: 24,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = villager;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = villager;
