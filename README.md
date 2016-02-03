graphql-umbraco
===================

A GraphQL server for Umbraco built on [express-graphql](https://github.com/graphql/express-graphql)

Install
-------------

Clone this repository locally and run `npm install`. Add your database connection details to `src/config/config.js`:

```javascript
        host: '1.100.123.123',
        port: 1433,
        dialect: 'mssql',
        database: 'my-umbraco-7',
        username: 'bob',
        password: ''
```

We're done! 

Usage
-------------

Start the server using:

```
npm start
```

By default, graphql-umbraco comes bundled with the [GraphiQL](https://github.com/graphql/graphiql) interface for building and running GraphQL queries. 


> **Note:**

> Once your server has started, browse to **/graphiql** to use GraphiQL. This URL can be changed in `config.js`

You can now run basic GraphQL queries against Umbraco. Here's how to query a **node by id**

<img src="http://i.imgur.com/no4fYYo.png" alt="Run a query" style="width: 400px;"/>

gives the result:

<img src="http://i.imgur.com/k0niQRp.png" alt="Query result" style="width: 400px;"/>


Goals
-------------

Query nodes by URL
Cache nodes and properties
Replace the wonky current test mocks with proper [Sinon.js mocks](http://www.sinonjs.org/)
Recursive, get children to *n* depth
Get ancestors
Automatically resolve media URLs by Id
Sample [React](https://facebook.github.io/react/) application using [Relay](https://facebook.github.io/relay/) architecture
Remove dependency on babel-cli for npm tasks

> **Note:**

> graphql-umbraco is *pre-alpha*. Ideas will be tried out and things will break. Don't use graphql-umbraco in any production setting. 


Contribute
-------------

Pull requests and ideas very much welcome. The best place to chat to me is on Twitter at [@perksc](https://twitter.com/perksc)


