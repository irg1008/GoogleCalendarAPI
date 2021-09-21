import CalendarHandler from "handler";
import config from "config";

const gcal = new CalendarHandler(config);

(async () => {
	const { data: events } = await gcal.getEvents({
		query: "",
	});
	console.log(events);
})();
