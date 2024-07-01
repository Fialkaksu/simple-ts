// Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["MONDAY"] = 0] = "MONDAY";
    DayOfWeek[DayOfWeek["TUESDAY"] = 1] = "TUESDAY";
    DayOfWeek[DayOfWeek["WEDNESDAY"] = 2] = "WEDNESDAY";
    DayOfWeek[DayOfWeek["THURSDAY"] = 3] = "THURSDAY";
    DayOfWeek[DayOfWeek["FRIDAY"] = 4] = "FRIDAY";
    DayOfWeek[DayOfWeek["SATURDAY"] = 5] = "SATURDAY";
    DayOfWeek[DayOfWeek["SUNDAY"] = 6] = "SUNDAY";
})(DayOfWeek || (DayOfWeek = {}));
function isWeekend(day) {
    return day === DayOfWeek.SATURDAY || day === DayOfWeek.SUNDAY;
}
// console.log(isWeekend(DayOfWeek.FRIDAY))
// console.log(isWeekend(DayOfWeek.SUNDAY))
//# sourceMappingURL=7.js.map