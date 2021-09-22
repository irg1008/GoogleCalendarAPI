import { Timezone } from "./Timezone.types";

// See: https://developers.google.com/calendar/api/v3/reference/

type OrderBy = "startTime" | "updated";
type Role = "reader";
type Status = "confirmed" | "tentative" | "cancelled";
type Transparency = "opaque" | "transparent";
type Visibility = "default" | "public" | "private" | "confidential";
type EventType = "default" | "outOfOffice";
type etag = string;
type Reminder = any;
type Datetime = string;

export interface EventParams {
	q?: string;
	iCalUID?: string;
	maxAttendees?: number;
	maxResults?: number;
	orderBy?: OrderBy;
	pageToken?: string;
	showDeleted?: boolean;
	showHiddenInvitations?: boolean;
	sharedExtendedProperty?: string;
	privateExtendedProperty?: string;
	updatedMin?: Datetime;
	timeZone?: Timezone;
	timeMin?: Datetime;
	timeMax?: Datetime;
	syncToken?: string;
	singleEvents?: boolean;
}

export interface Config {
	apiKey: string;
	calId: string;
}

export type EventMiddlewareParams = EventParams & Config;

interface EventDate {
	date: Date;
	dateTime: Datetime;
	timeZone: Timezone;
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
	created: Datetime;
	updated: Datetime;
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