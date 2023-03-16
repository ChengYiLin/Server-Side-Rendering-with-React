import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
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
    let pageComponent = '';
    let styleTags = '';
    const sheet = new ServerStyleSheet();

    try {
        pageComponent = renderToString(
            <StyleSheetManager sheet={sheet.instance}>
                <App />
            </StyleSheetManager>,
        );
        styleTags = sheet.getStyleTags();
    } catch (error) {
        console.error(error);
    } finally {
        sheet.seal();
    }

    const htmlTemplate = getHtmlTemplate(pageComponent, styleTags);

    res.setHeader('Content-Type', 'text/html');
    res.send(htmlTemplate);
});

/**
 * Server activation
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.info(`-- Server: run on http://localhost:${PORT} --`);
});
