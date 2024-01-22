/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDay {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
}
enum DayOff {
  saturday = "Saturday",
  sunday = "Sunday",
}
function isWeekend(day: WeekDay | DayOff): day is WeekDay {
  return true;
}
