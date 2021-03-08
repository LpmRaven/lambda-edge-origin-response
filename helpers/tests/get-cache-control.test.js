const { getCacheControl } = require('../get-cache-control');

describe('check cache control returns the correct headers', () => {

    beforeEach(() => {
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('will return immutable cache-control for js files', async () => {
        const mockRequest = {
            uri: '/en-gb/webpack-runtime-4f2783aa70db07855ff4.js'
        }
        const mockResponse = {
            headers: {}
        }

        const result = getCacheControl(mockRequest, mockResponse);
        expect(result).toEqual({ "headers": { "cache-control": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] } });
    });
})
