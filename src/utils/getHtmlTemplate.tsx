function getHtmlTemplate(componentHtmlString: string, styleTags: string) {
    const htmlString = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Document</title>
                ${styleTags}
            </head>
            <body>
                <div id="root">${componentHtmlString}</div>
                <script src="/static/client.bundle.js"></script>
            </body>
        </html>
    `;

    return htmlString;
}

export default getHtmlTemplate;
