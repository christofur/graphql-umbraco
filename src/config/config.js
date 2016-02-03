const Config = {
    DbConfig: {
        host: '',
        port: 1433,
        dialect: 'mssql',
        database: '',
        username: '',
        password: ''
    },
    ServerConfig: {
        appPort: 3000,
        startUrl: '/graphiql'
    }
};

export default Config;