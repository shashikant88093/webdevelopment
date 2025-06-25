# Date Constructor Syntax 
- new Date()
- new Date(value)
- new Date(dateString)
- new Date(dateObject)

- new Date(year, monthIndex)
- new Date(year, monthIndex, day)
- new Date(year, monthIndex, day, hours)
- new Date(year, monthIndex, day, hours, minutes)
- new Date(year, monthIndex, day, hours, minutes, seconds)
- new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

Date()

## Several ways to create a Date object
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const birthday = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const birthday = new Date(1995, 11, 17); // the month is 0-indexed
const birthday = new Date(1995, 11, 17, 3, 24, 0);
const birthday = new Date(628021800000); // passing epoch timestamp
