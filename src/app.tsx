import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

/**
 * App Configuration
 */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Route Setting
 */
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Express + TypeScript</h1>');
});

/**
 * Server activation
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.info(`-- Server: run on http://localhost:${PORT} --`);
});
