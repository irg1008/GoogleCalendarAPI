import env from "dotenv";
import { Config } from "./Config.types";
env.config({ path: ".env" });

const apiKey = process.env.KEY;

const calId = "rcc5p5lpprm58409k39j6an06s%40group.calendar.google.com";

const config: Config = {
	apiKey,
	calId,
};

export default config;
