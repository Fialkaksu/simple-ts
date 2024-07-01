/*
У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

*/

class Key {
  private signature: number = Math.floor(Math.random() * 1000);

  getSignature(): number {
    return this.signature;
  }
}

/*
Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.
*/

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

/*
Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.
*/

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  comeIn(tenant: Person): void {
    if (!this.door) {
      console.log(`Sorry, your key doesn't fit this door :(`);
      return;
    }

    this.tenants.push(tenant);
    // console.log(`Tenant: ${JSON.stringify(tenant.getKey())}`);
    // console.log(
    //   `All tenants: ${this.tenants.map(tenant =>
    //     JSON.stringify(tenant.getKey())
    //   )}`
    // );
    console.log(`Come in please!`);

    this.door = false;
  }

  abstract openDoor(key: Key): void;
}

/*
Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.
*/

class MyHouse extends House {
  constructor(protected key: Key) {
    super();
  }

  openDoor(key: Key): void {
    if (this.key === key) {
      this.door = true;
    }

    console.log(`Door is ${this.door ? 'open' : 'closed'}.`);
  }
}

const key = new Key();
const key2 = new Key();

const house = new MyHouse(key);

const person = new Person(key);
const person2 = new Person(key2);

house.openDoor(person.getKey());
house.comeIn(person);

console.log('---------------');

house.openDoor(person2.getKey());
house.comeIn(person2);

console.log('---------------');

const house2 = new MyHouse(key2);

house2.openDoor(person2.getKey());
house2.comeIn(person2);

export {};
