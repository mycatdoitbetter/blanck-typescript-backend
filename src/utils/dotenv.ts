import * as dotenv from "dotenv";

dotenv.config();

const path = `${__dirname}/../../.env.development`;

dotenv.config({ path: path });

export const ANYVAR = process.env.ANYVAR;
