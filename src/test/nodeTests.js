import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest-as-promised';
import Express from 'express';
import GraphHTTP from 'express-graphql';
import { Schema } from '../schema/schema';
import Config from '../config/config';
import Db from '../database/db';
import sinon from 'sinon';
import _ from 'lodash';
import { nodes } from './data/testData';

describe('Server can fetch node data', () => {

    let app, nodeStub = null;

    before(() => {

        app = Express();

        app.use(Config.ServerConfig.startUrl, GraphHTTP({
            schema: Schema(Db),
            pretty: false,
            graphiql: false
        }));

    });

    beforeEach(() => {
        nodeStub = sinon.stub(Db.models.nodes, "findAll").returns(nodes);
    });

    it('can retrieve the text property of a node', async () => {

        const query = "{node(nodeId:1){text}}";
        const response = await request(app).get(Config.ServerConfig.startUrl + '?query=' + query);
        expect(nodeStub.calledOnce).to.equal(true);
        expect(response.body.data.node[0].text).to.equal('Fruits of the world');

    });

    it('can retrieve the id property of a node', async () => {

        const query = "{node(nodeId:1){nodeId}}";
        const response = await request(app).get(Config.ServerConfig.startUrl + '?query=' + query);
        expect(nodeStub.calledOnce).to.equal(true);
        expect(response.body.data.node[0].nodeId).to.be.within(1,5);

    });

    it('can retrieve the versionId property of a node', async () => {

        const query = "{node(nodeId:1){versionId}}";
        const response = await request(app).get(Config.ServerConfig.startUrl + '?query=' + query);
        expect(nodeStub.calledOnce).to.equal(true);
        expect(response.body.data.node[0].versionId).to.be.at.least(1);

    });


    it('can retrieve the newest property of a node', async () => {

        const query = "{node(nodeId:1){newest}}";
        const response = await request(app).get(Config.ServerConfig.startUrl + '?query=' + query);
        expect(nodeStub.calledOnce).to.equal(true);
        expect(response.body.data.node[0].newest).to.be.true;

    });

    it('can retrieve the children of a node', async () => {

        const query = "{node(nodeId:1){children{id}}}";
        const response = await request(app).get(Config.ServerConfig.startUrl + '?query=' + query);
        expect(nodeStub.calledOnce).to.equal(true);
        expect(response.body.data.node[0].children.length).to.be.at.least(1);

    });

    it('can retrieve the text property of the child of a node', async () => {

        const query = "{node(nodeId:1){children{id}}}";
        const response = await request(app).get(Config.ServerConfig.startUrl + '?query=' + query);
        expect(nodeStub.calledOnce).to.equal(true);
        expect(response.body.data.node[0].children[0].text).to.equal('Fruits of the world');

    });

    it('does not get the children of a node by default', async () => {

        const query = "{node(nodeId:1){text}}";
        const response = await request(app).get(Config.ServerConfig.startUrl + '?query=' + query);
        expect(nodeStub.calledOnce).to.equal(true);
        expect(response.body.data.node[0].children).to.be.undefined;

    });

    it('fails if we request a nonexistent property of a node', async () => {

        const query = "{node(nodeId:1){magicUnicorns}}";
        const response = await request(app).get(Config.ServerConfig.startUrl + '?query=' + query);
        expect(response.body.data).to.be.undefined;

    });

    afterEach(() => {

        nodeStub.restore();

    });

});