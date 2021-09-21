import { Config } from "config/Config.types";
import { getCalendarEvents } from "middlewares/calendar";
import { EventQuery } from "types/Calendar.types";

class CalendarHandler {
	private calId: string;
	private apiKey: string;

	constructor({ calId, apiKey }: Config) {
		this.calId = calId;
		this.apiKey = apiKey;
	}

	getEvents = (eventQuery: EventQuery) =>
		getCalendarEvents({
			...eventQuery,
			calId: this.calId,
			apiKey: this.apiKey,
		});
}

export default CalendarHandler;
