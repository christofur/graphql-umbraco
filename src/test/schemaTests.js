import { expect } from 'chai';
import { should, describe, it } from 'mocha';
import request from 'supertest-as-promised';
import Express from 'express';
import GraphHTTP from 'express-graphql';
import { Schema } from '../schema/schema';
import Config from '../config/config';
import dbMock from './mocks/databaseMock';

describe('Schema can process basic query', () => {

    it('can run an empty query against a mock database', async () => {
        const app = Express();

        app.use(Config.ServerConfig.startUrl, GraphHTTP({
            schema: Schema(dbMock),
            pretty: true,
            graphiql: true
        }));

        var caughtError = null;
        try {
            await request(app).get('/graphql?query={test}');
        } catch (error) {
            caughtError = error;
        }

        expect(caughtError).to.equal.null;

    });

});