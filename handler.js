const { getCustomResponseWithUrl } = require('./helpers/get-custom-response-with-url');
const { getCacheControl } = require('./helpers/get-cache-control');
const { getSecurityHeaders } = require('./helpers/get-security-headers');

exports.handler = async (event) => {
    const response = event.Records[0].cf.response;
    const request = event.Records[0].cf.request;

    try {
        const responseWithCustomUrl = getCustomResponseWithUrl(request, response);
        const responseWithSecurityHeaders = getSecurityHeaders(responseWithCustomUrl);
        const responseWithCacheControl = getCacheControl(request, responseWithSecurityHeaders);

        return responseWithCacheControl;

    } catch (err) {
        console.error(err);
        return response;
    }
};