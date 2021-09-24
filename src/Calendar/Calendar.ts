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

  /**
   * Returns todays Date with T=23:59:59
   * @param days:number 0 by default, number of days to increase todays date.
   * @returns New Date object
   */
  addDays = (days = 0) => {
    const today = new Date();

    today.setDate(today.getDate() + days);

    const isoDate = `${today.toISOString().slice(0, 10)}T23:59:59.999Z`;

    return new Date(isoDate);
  };
}

export default Calendar;
