import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek";
const {dateFnsLocalizer} = require("react-big-calendar");

let locales = {
	fr: require("date-fns/locale/fr")
}

export const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales
})
