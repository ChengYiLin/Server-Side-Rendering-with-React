import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import getHtmlTemplate from './utils/getHtmlTemplate';
import App from '../client/app';

dotenv.config();

const app: Express = express();

/**
 * App Configuration
 */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static('public'));

/**
 * Route Setting
 */
app.get('/', (req: Request, res: Response) => {
    const pageComponent = renderToString(<App />);
    const htmlString = getHtmlTemplate(pageComponent);

    res.setHeader('Content-Type', 'text/html');
    res.send(htmlString);
});

/**
 * Server activation
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.info(`-- Server: run on http://localhost:${PORT} --`);
});
