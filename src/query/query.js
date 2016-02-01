import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql';
import _ from 'lodash';
import Node from '../schema/node';
import ChildNode from '../schema/childNode';
import Property from '../schema/property';
import PropertyType from '../schema/propertyType';

const Query = function(db){
    const Db = db;
    return new GraphQLObjectType({
        name: 'Query',
        description: 'Root query object',
        fields: () => {
            return {
                properties: {
                    type: new GraphQLList(Property),
                    args: {
                        id: {
                            type: GraphQLInt
                        },
                        versionId: {
                            type: GraphQLString
                        }
                    },
                    resolve (root, args) {
                        return Db.models.properties.findAll({
                            attributes: ['id', 'versionId', 'alias'],
                            where: {
                                alias: 'title'
                            }
                        });
                    }
                },

                propertyTypes: {
                    type: new GraphQLList(PropertyType),
                    args: {
                        id: {
                            type: GraphQLInt
                        },
                        key: {
                            type: GraphQLString
                        }
                    },
                    resolve (root, args) {
                        return Db.models.propertyTypes.findAll({
                            attributes: ['id', 'alias'],
                            where: args
                        });
                    }
                },

                node: {
                    type: new GraphQLList(Node),
                    args: {
                        nodeId: {
                            type: GraphQLInt
                        }
                    },
                    resolve (root, args) {
                        return Db.models.nodes.findAll({
                            attributes: ['nodeId', 'newest', 'versionId'],
                            where: {
                                $and: [{"newest": 1}, args]}
                        });
                    }
                }
            };
        }
    });
};

export default Query;