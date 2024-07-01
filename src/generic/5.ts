// Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.

// interface KeyValuePair {
//   key;
//   value;
// }

interface KeyValuePair<TKey, TVal> {
  key: TKey;
  value: TVal;
}

// const pair: KeyValuePair<number, string> = {
//   key: 1,
//   value: 'string'
// };

// const pair2: KeyValuePair<string, number> = {
//   key: 'string',
//   value: 1
// }

// const pair3: KeyValuePair<number, boolean> = {
//   key: 1,
//   value: true
// }

// console.log(pair, pair2, pair3);
