
exports.handler = (event, context, callback) => {
    try {
        const response = event.Records[0].cf.response;

        if (response.status === '302') {
            response.status = '301';
            response.statusDescription = 'Moved Permanently'
        }

        callback(null, response);

    } catch (err) {
        console.error(err);
        callback(null, response);
    }
};