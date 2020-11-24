
exports.handler = (event, context, callback) => {
    const response = event.Records[0].cf.response;

    try {

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