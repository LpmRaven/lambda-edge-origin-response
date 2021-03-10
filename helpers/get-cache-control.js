const path = require('path');

const getCacheControl = (request, response) => {

    if (request.uri && response.status === '200') {
        const parsedPath = path.parse(request.uri);

        if (
            parsedPath.ext === ".js" && parsedPath.name !== "sw" ||
            parsedPath.ext === ".webp" ||
            parsedPath.ext === ".css" ||
            parsedPath.ext === ".woff" ||
            parsedPath.ext === ".woff2" ||
            parsedPath.ext === ".ttf" ||
            parsedPath.ext === ".otf" ||
            parsedPath.ext === ".eot" ||
            parsedPath.ext === ".jpg" ||
            parsedPath.ext === ".jpeg" ||
            parsedPath.ext === ".png" ||
            parsedPath.ext === ".gif" ||
            parsedPath.ext === ".svg" ||
            parsedPath.ext === ".ico" ||
            parsedPath.dir.includes("/static")
        ) {
            response.headers['cache-control'] = [{
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable'
            }];
        }

        if (
            parsedPath.ext === ".html" ||
            parsedPath.ext === ".json" ||
            parsedPath.base === "page-data.json" ||
            parsedPath.base === "app-data.json"
        ) {
            response.headers['cache-control'] = [{
                key: 'Cache-Control',
                value: 'public, max-age=0, must-revalidate'
            }];
        }

        if (
            parsedPath.name === "sw" && parsedPath.ext === ".js"
        ) {
            response.headers['cache-control'] = [{
                key: 'Cache-Control',
                value: 'no-store, no-cache, max-age=0, must-revalidate'
            }];
        }

        return response;
    }

    return response;
}

module.exports = {
    getCacheControl
}
