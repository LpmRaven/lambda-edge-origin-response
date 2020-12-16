const path = require('path');

const getCustomResponseWithUrl = (response, uri, statusCode) => {
    if (statusCode === "302") {
        return (
            {
                ...response,
                status: '302',
                statusDescription: 'Found',
                headers: {
                    ...response.headers,
                    location: [{
                        key: 'Location',
                        value: uri,
                    }],
                    'cache-control': [{
                        key: 'Cache-Control',
                        value: "max-age=3600"
                    }],
                },
            }
        )
    }

    if (statusCode === "301") {
        return (
            {
                ...response,
                status: '301',
                statusDescription: 'Moved Permanently',
                headers: {
                    ...response.headers,
                    location: [{
                        key: 'Location',
                        value: uri,
                    }],
                    'cache-control': [{
                        key: 'Cache-Control',
                        value: "max-age=3600"
                    }],
                },
            }
        )
    }

    if (statusCode === "200") {
        return (
            {
                ...response,
                status: '200',
                statusDescription: 'OK',
                headers: {
                    ...response.headers,
                    location: [{
                        key: 'Location',
                        value: uri,
                    }],
                    'cache-control': [{
                        key: 'Cache-Control',
                        value: "max-age=3600"
                    }],
                },
            }
        )
    }

};

module.exports = {
    getCustomResponseWithUrl
}
