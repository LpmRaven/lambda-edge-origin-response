
exports.handler = (event, context, callback) => {
    try {
        const request = event.Records[0].cf.request;
        const headers = request.headers;

        console.log('headers', headers);


        callback(null, request);

    } catch (err) {
        console.error(err);
        return new Error(err);
    }
};