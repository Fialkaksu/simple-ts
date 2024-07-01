// У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType. Функція compare повинна повертати AllType.
// function compare<
//   T extends Pick<AllType, 'name' | 'color'>,
//   B extends Pick<AllType, 'position' | 'weight'>
// >(top: T, bottom: B): AllType {
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
//# sourceMappingURL=2.js.map