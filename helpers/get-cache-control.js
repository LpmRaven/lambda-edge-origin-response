const path = require('path');

const getCacheControl = (request, response) => {

    if (request.uri) {
        const parsedPath = path.parse(request.uri);

        if (parsedPath.ext === ".js" || parsedPath.ext === ".css" || parsedPath.dir.includes("/static")) {
            response.headers['cache-control'] = [{
                key: 'Cache-Control',
                value: 'cache-control: public, max-age=31536000, immutable'
            }];
        }

        if (parsedPath.ext === ".html" || parsedPath.name === "sw" && parsedPath.ext === ".js" || parsedPath.base === "page-data.json" || parsedPath.base === "app-data.json") {
            response.headers['cache-control'] = [{
                key: 'Cache-Control',
                value: 'public, max-age=0, must-revalidate'
            }];
        }

        return response;
    }
}

module.exports = {
    getCacheControl
}
