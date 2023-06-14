'use strict';
const { app } = require('../src/server');
const { db } = require('../src/models/index');
const supertest = require('supertest');
const mockServerMethods = supertest(app);

beforeAll(async () => {
    await db.sync();
});

describe('testing my server', () => {
    it('return hi in home route', async () => {
        const response = await mockServerMethods.get('/');
        expect(response.status).toBe(200);
    });
    it('return 404 in an invalid routes', async () => {
        const response = await mockServerMethods.get('/no');
        expect(response.status).toBe(404);
    });


    it('can add a food', async () => {
        const response = await mockServerMethods.post('/food').send({
            Name: 'Mansaf'
        });
        expect(response.status).toBe(201);
    });
    it('can read all foods', async () => {
        const response = await mockServerMethods.get('/food');
        expect(response.status).toBe(200);
    });
    it('can update food', async () => {
        const response = await mockServerMethods.put('/food/1');
        expect(response.status).toBe(201);
    });
    it('can delete food', async () => {
        const response = await mockServerMethods.delete('/food/1');
        expect(response.status).toBe(204);
    });


    it('can add a clothes', async () => {
        const response = await mockServerMethods.post('/clothes').send({
            Name: 'hat'
        });
        expect(response.status).toBe(201);
    });
    it('can read all clothes', async () => {
        const response = await mockServerMethods.get('/clothes');
        expect(response.status).toBe(200);
    });
    it('can update clothes', async () => {
        const response = await mockServerMethods.put('/clothes/1');
        expect(response.status).toBe(201);
    });
    it('can delete clothes', async () => {
        const response = await mockServerMethods.delete('/clothes/1');
        expect(response.status).toBe(204);
    });
});

afterAll(async () => {
    await db.drop();
});