import request from 'supertest';

import app from '../../src/app';

describe('API', () => {
	test('It should response GET method with status 200', done => {
		request(app)
			.get('/api/info')
			.expect(200)
			.end((err, res) => {
				expect(res.body.status).toBe('OK');
				done();
			});
	});
});
