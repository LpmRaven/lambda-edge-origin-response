const path = require('path');

exports.handler = async (event) => {
    const response = event.Records[0].cf.response;
    const request = event.Records[0].cf.request;

    try {
        const uri = request.uri;
        const parsedPath = path.parse(request.uri);

        console.log(`response.headers['location']`, response.headers['location']);
        console.log('request.uri', request.uri);
        console.log('response.status', response.status);

        if (uri) {
            if (parsedPath.base === 'index.html') {
                const returnValue = getCustomResponseWithUrl(response, uri.slice(0, -11), "200");
                console.log('returnValue for 200', returnValue);
                return returnValue;
            }

            if (response.uri.slice(-1) === "/") {
                const returnValue = getCustomResponseWithUrl(response, uri.slice(0, -1), "301");
                console.log('returnValue for 301', returnValue);
                return returnValue;
            }

            if (response.status === '302') {
                const returnValue = getCustomResponseWithUrl(response, uri, "302");
                console.log('returnValue for 302', returnValue);
                return returnValue;
            }
        }

        return response;

    } catch (err) {
        console.error(err);
        return response;
    }
};