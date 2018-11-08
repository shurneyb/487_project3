console.log("scripts loaded");

/* adapted from https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript */
var objToday = new Date(),
	weekday = new Array('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return ""; a = parseInt((a + "").charAt(1)); return 1 == a ? "" : 2 == a ? "" : 3 == a ? "" : "" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear()
var today = dayOfWeek + " " + curMonth + ". " + dayOfMonth + ", " + curYear;

/* End adapted from https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript */

document.getElementById('date').innerHTML = today;

