function getHtmlTemplate(componentHtmlString: string) {
    const htmlString = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Document</title>
            </head>
            <body>
                <div id="root">
                    ${componentHtmlString}
                </div>
                <script src="/static/client.bundle.js"></script>
            </body>
        </html>
    `;

    return htmlString;
}

export default getHtmlTemplate;
