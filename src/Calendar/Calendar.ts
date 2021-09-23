import { Config, Events, EventParams } from "src/types/Calendar.types";
import { getCalendarEvents } from "src/middlewares/calendar";

class Calendar {
	private config: Config;

	constructor(config: Config) {
		this.config = config;
	}

	updateConfig = (newConfig: Config) => (this.config = newConfig);

	getEvents = (eventParams: EventParams) =>
		getCalendarEvents({
			...eventParams,
			...this.config,
		});

	listEvents = () =>
		getCalendarEvents({
			...this.config,
		});
}

export default Calendar;
