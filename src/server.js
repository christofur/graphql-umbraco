import Express from 'express';
import GraphHTTP from 'express-graphql';
import { Schema } from './schema/schema';
import Config from './config/config';
import Db from './database/db';
//import Db from './test/mocks/databaseMock';

const APP_PORT = Config.ServerConfig.appPort;

const app = Express();

app.use(Config.ServerConfig.startUrl, GraphHTTP({
    schema: Schema(Db),
    pretty: true,
    graphiql: true
}));

app.listen(APP_PORT, () => {
    console.log(`App listening on port ${APP_PORT}`);
});