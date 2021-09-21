interface EventQuery {
	from?: Date;
	to?: Date;
	query?: string;
}

interface GeneralEventQuery extends EventQuery {
	calId: string;
	apiKey: string;
}

interface EventAPIParams {
	timeMin: string;
	timeMax: string;
	q: string;
	key: string;
}

interface Config {
	apiKey: string;
	calId: string;
}

type EventResponse = any;

export { EventQuery, EventResponse, GeneralEventQuery, EventAPIParams, Config };
