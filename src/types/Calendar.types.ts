import { Timezone } from "./Timezone.types";

export interface EventQuery {
	from?: Date;
	to?: Date;
	query?: string;
}

export interface GeneralEventQuery extends EventQuery {
	calId: string;
	apiKey: string;
}

export interface EventAPIParams {
	timeMin: string;
	timeMax: string;
	q: string;
	key: string;
}

export interface Config {
	apiKey: string;
	calId: string;
}

type Role = "reader";
type Status = "confirmed" | "tentative" | "cancelled";
type Transparency = "opaque" | "transparent";
type Visibility = "default" | "public" | "private" | "confidential";
type EventType = "default" | "outOfOffice";
type etag = string;
type Reminder = any;

interface EventDate {
	date: Date;
	dateTime: string;
	timeZone: string;
}

interface User {
	id: string;
	email: string;
	displayName: string;
	self: boolean;
}

interface Attende extends User {
	organizer: boolean;
	resource: boolean;
	optional: boolean;
	responseStatus: string;
	comment: string;
	additionalGuests: number;
}

interface ExtendedProperties {
	private: Record<string, string>;
	shared: Record<string, string>;
}

export interface Events {
	kind: "calendar#events";
	etag: etag;
	summary: string;
	description: string;
	updated: string;
	timeZone: Timezone;
	accessRole: Role;
	defaultReminders: Reminder[];
	nextSyncToken: string;
	items: Event[];
}

export interface Event {
	kind: "calendar#event";
	etag: etag;
	id: string;
	status: Status;
	htmlLink: string;
	created: string;
	updated: string;
	summary: string;
	description: string;
	location: string;
	colorId: string;
	creator: User;
	organizer: User;
	start: EventDate;
	end: EventDate;
	endTimeUnspecified: boolean;
	recurrence: [string];
	recurringEventId: string;
	originalStartTime: EventDate;
	transparency: Transparency;
	visibility: Visibility;
	iCalUID: string;
	sequence: number;
	attendees: Attende[];
	attendeesOmitted: boolean;
	extendedProperties: ExtendedProperties;
	hangoutLink: string;
	conferenceData: {
		createRequest: {
			requestId: string;
			conferenceSolutionKey: {
				type: string;
			};
			status: {
				statusCode: string;
			};
		};
		entryPoints: [
			{
				entryPointType: string;
				uri: string;
				label: string;
				pin: string;
				accessCode: string;
				meetingCode: string;
				passcode: string;
				password: string;
			}
		];
		conferenceSolution: {
			key: {
				type: string;
			};
			name: string;
			iconUri: string;
		};
		conferenceId: string;
		signature: string;
		notes: string;
	};
	gadget: {
		type: string;
		title: string;
		link: string;
		iconLink: string;
		width: number;
		height: number;
		display: string;
		preferences: Record<string, string>;
	};
	anyoneCanAddSelf: boolean;
	guestsCanInviteOthers: boolean;
	guestsCanModify: boolean;
	guestsCanSeeOtherGuests: boolean;
	privateCopy: boolean;
	locked: boolean;
	reminders: {
		useDefault: boolean;
		overrides: [
			{
				method: string;
				minutes: number;
			}
		];
	};
	source: {
		url: string;
		title: string;
	};
	attachments: [
		{
			fileUrl: string;
			title: string;
			mimeType: string;
			iconLink: string;
			fileId: string;
		}
	];
	eventType: EventType;
}
