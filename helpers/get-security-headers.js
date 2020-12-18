
const getSecurityHeaders = (response) => {
    response.headers['strict-transport-security'] = [{
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubdomains'
    }];
    response.headers['x-content-type-options'] = [{
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    }];
    response.headers['x-frame-options'] = [{
        key: 'X-Frame-Options',
        value: "SAMEORIGIN"
    }];
    response.headers['referrer-policy'] = [{
        key: 'Referrer-Policy',
        value: "same-origin"
    }];
    response.headers['x-xss-protection'] = [{
        key: 'X-XSS-Protection',
        value: "1; mode=block"
    }];
    response.headers['accept-ranges'] = [{
        key: 'Accept-Ranges',
        value: "bytes"
    }];
    response.headers['content-security-policy'] = [{
        key: 'Content-Security-Policy',
        value: "frame-ancestors 'self'"
    }];

    return response;
}

module.exports = {
    getSecurityHeaders
}
