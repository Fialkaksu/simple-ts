// Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum DayOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.SATURDAY || day === DayOfWeek.SUNDAY;
}

// console.log(isWeekend(DayOfWeek.FRIDAY))
// console.log(isWeekend(DayOfWeek.SUNDAY))
