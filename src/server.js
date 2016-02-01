import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './src/schema/schema';
import Config from './src/config/config';
import Db from 'test/mocks/databaseMock.js';

const APP_PORT = Config.ServerConfig.appPort;

const app = Express();

app.use(Config.ServerConfig.startUrl, GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}));

app.listen(APP_PORT, () => {
    console.log(`App listening on port ${APP_PORT}`);
});