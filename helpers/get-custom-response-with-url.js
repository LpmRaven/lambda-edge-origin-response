const path = require('path');

const getCustomResponseWithUrl = (request, response) => {
    console.log("getCustomResponseWithUrl");
    if (request.uri) {
        const uri = request.uri;
        const parsedPath = path.parse(request.uri);

        console.log("parsedPath", parsedPath);

        if (parsedPath && parsedPath.base === 'index.html') {
            const newUri = uri.slice(0, -11);

            response.status = '200';
            response.statusDescription = 'OK';
            response.headers['location'] = [{
                key: 'Location',
                value: newUri
            }];

            console.log('index.html newUri', newUri);

            return response;
        }

        if (uri.slice(-1) === "/") {
            const newUri = uri.slice(0, -1);

            response.status = '301';
            response.statusDescription = 'Moved Permanently';
            response.headers['location'] = [{
                key: 'Location',
                value: newUri
            }];

            console.log('slash newUri', newUri);

            return response;
        }

        if (response && response.status === '302') {
            const newUri = uri;
            //response.status = '302';
            response.statusDescription = 'Found';
            response.headers['location'] = [{
                key: 'Location',
                value: newUri
            }];

            console.log('302 newUri', newUri);

            return response;
        }

        return response;
    }

    return response;
};

module.exports = {
    getCustomResponseWithUrl
}
