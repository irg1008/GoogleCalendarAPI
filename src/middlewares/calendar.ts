import axios, { AxiosError } from "axios";
import {
	GeneralEventQuery,
	Events,
	EventAPIParams,
} from "src/types/Calendar.types";
import { parseDate } from "src/utils/time";

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
		return { data: null, error: (error as AxiosError).response.data };
	}
};

const getCalendarEvents = ({
	from,
	to,
	query,
	calId,
	apiKey,
}: GeneralEventQuery) =>
	withMiddle<Events>(async () => {
		const timeMin = parseDate(from);
		const timeMax = parseDate(to);

		const url = `${apiURL}${calId}/events`;

		const params: EventAPIParams = {
			timeMin,
			timeMax,
			q: query,
			key: apiKey,
		};

		const res = await axios.get<Events>(url, { params });
		return res.data;
	});

export { getCalendarEvents };
export type { MiddleData };
