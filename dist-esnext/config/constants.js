import dotenv from 'dotenv';
dotenv.config({ silent: true });
export const { DEV_URL, PROD_URL } = process.env;
export const DB_CONNECTION_STRING = process.env.NODE_ENV === 'production'
    ? process.env.PROD_URL
    : 'mongodb://localhost:27017/demo-server';
export const tokenTimeout = 10;
//# sourceMappingURL=constants.js.map