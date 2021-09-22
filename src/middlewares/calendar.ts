import axios, { AxiosError } from "axios";
import {
	Events,
	EventMiddlewareParams,
	Config,
} from "src/types/Calendar.types";

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
	calId,
	apiKey,
	...middleParams
}: EventMiddlewareParams) =>
	withMiddle<Events>(async () => {
		const url = `${apiURL}${calId}/events`;
		const res = await axios.get<Events>(url, {
			params: {
				key: apiKey,
				...middleParams,
			},
		});
		return res.data;
	});
	
export { getCalendarEvents };
export type { MiddleData };
