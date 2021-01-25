const subject = require('../lib/fetch');

describe('Testing the Fetch Library', () => {

	const testUrls = [
		'https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=FTSE:FSI',
            'https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=INX:IOM',
            'https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=EURUSD',
            'https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=GBPUSD',
            'https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=IB.1:IEU'
	]

	//Changed test to align with basic test philosophy - this is in line with Test Driven Development Spec
	it('resolves an array of urls', async () => {
		const response = await (subject(testUrls))
		expect(response[0]);
		expect(response[1]);
		expect(response[2]);
		expect(response[3]);
		expect(response[4]);
	});

});
