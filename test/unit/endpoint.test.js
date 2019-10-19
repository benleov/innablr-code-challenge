// application tests go here
const request = require('supertest')
const server = require('../../src/index')

describe('root endpoint', () => {

    it('should return hello world', async () => {
        const res = await request(server)
            .get('/')
            .send()
        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual("Hello World")
    })

    it('should return status', async () => {
        const res = await request(server)
            .get('/status')
            .send()
        expect(res.statusCode).toEqual(200)
    })

    afterAll(done => {
        server.close(done)
    })
})
