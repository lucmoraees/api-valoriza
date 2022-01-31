import { IConfigJwt } from "../@types";

const jwt = {
  secret: process.env.APP_SECRET,
  expiresIn: '356d',
} as IConfigJwt;

export default {
	jwt,
};