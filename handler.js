const path = require('path');

exports.handler = async (event) => {
    const response = event.Records[0].cf.response;
    const request = event.Records[0].cf.request;

    try {
        const uri = request.uri;
        const parsedPath = path.parse(request.uri);

        console.log(`response.headers['location']`, response.headers['location']);
        console.log('request.uri', request.uri);


        if (response.status === '302') {
            console.log('change to 301');
            response.status = '301';
            response.statusDescription = 'Moved Permanently'
        }

        // if (parsedPath.base === 'index.html') {
        //     response.uri = response.uri.slice(0, -11);
        // }

        // if (response.uri.slice(-1) === "/") {
        //     response.uri = response.uri.slice(0, -1);
        // }

        return response;

    } catch (err) {
        console.error(err);
        return response;
    }
};