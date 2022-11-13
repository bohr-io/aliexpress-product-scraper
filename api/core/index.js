const aliexpressProductScraper = require('./src/aliexpressProductScraper');

exports.handler = async (event) => {
    try {
        const ret = await aliexpressProductScraper(event.queryStringParameters.productId, event.queryStringParameters.feedbackLimit);
        return {
            statusCode: 200,
            body: JSON.stringify(ret),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error.message),
        };
    }
};