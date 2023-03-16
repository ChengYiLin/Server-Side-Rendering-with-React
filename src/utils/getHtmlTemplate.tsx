function getHtmlTemplate(
    componentHtmlString: string,
    styleTags: string,
    initData: string,
) {
    const htmlString = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Document</title>
                ${styleTags}
            </head>
            <body>
                <div id="root">${componentHtmlString}</div>
                <script>
                    window.__SERVER_DATA__  = ${initData.replace(
                        /</g,
                        '\\u003c',
                    )}
                </script>
                <script src="/static/client.bundle.js"></script>
            </body>
        </html>
    `;

    return htmlString;
}

export default getHtmlTemplate;
