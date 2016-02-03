import Sequelize from 'sequelize';
import _ from 'lodash';
import Config from '../config/config';
import Properties from './models/property';
import PropertyTypes from './models/propertyType';
import Nodes from './models/node';
import ChildNodes from './models/childNode';
import Constants from '../constants/constants'

const Conn = new Sequelize(
    Config.DbConfig.database, // Database name
    Config.DbConfig.username, // Username
    Config.DbConfig.password, // Password
    {
        host: Config.DbConfig.host,
        dialect: Config.DbConfig.dialect,
        port: Config.DbConfig.port,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });

const Property = Conn.define('properties', Properties,
    {
        timestamps: false,
        tableName: Constants.DB_TABLE_PROPERTYDATA
    }
);

const PropertyType = Conn.define('propertyTypes', PropertyTypes,
    {
        timestamps: false,
        tableName: Constants.DB_TABLE_PROPERTYTYPES
    }
);

const Node = Conn.define('nodes', Nodes,
    {
        timestamps: false,
        tableName: Constants.DB_TABLE_DOCUMENTS
    }
);

const ChildNode = Conn.define('childNode', ChildNodes,
    {
        timestamps: false,
        tableName: Constants.DB_TABLE_NODES
    }
);

Conn.initialise = function(){
    try {
        Node.hasMany(Property, {as: 'properties', foreignKey: Constants.DB_KEYS_CONTENTNODEID});
        Property.belongsTo(PropertyType, {
            as: 'propertyType',
            targetKey: 'id',
            foreignKey: Constants.DB_KEYS_PROPERTYTYPEID
        });
        Node.hasMany(ChildNode, {as: 'childNodes', foreignKey: Constants.DB_KEYS_PARENTID});
        Conn.sync();
    } catch (e) {
    }
};

export default Conn;