import axios from "axios";
import {
	GeneralEventQuery,
	EventResponse,
	EventAPIParams,
} from "@/types/Calendar.types";
import { parseDate } from "@/utils/time";

const apiURL = "https://www.googleapis.com/calendar/v3/calendars/";

interface MiddleData<T> {
	data: T;
	error: any;
}

const withMiddle = async <T>(fn: () => Promise<T>): Promise<MiddleData<T>> => {
	try {
		const data = await fn();
		return { data, error: null };
	} catch (error) {
		return { data: null, error: error };
	}
};

const getCalendarEvents = ({
	from,
	to,
	query,
	calId,
	apiKey,
}: GeneralEventQuery) =>
	withMiddle<EventResponse>(async () => {
		const timeMin = parseDate(from);
		const timeMax = parseDate(to);

		const url = `${apiURL}${calId}/events`;

		const params: EventAPIParams = {
			timeMin,
			timeMax,
			q: query,
			key: apiKey,
		};

		const res = await axios.get<EventResponse>(url, { params });
		return res.data;
	});

export { getCalendarEvents };
export type { MiddleData };
