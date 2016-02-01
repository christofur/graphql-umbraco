import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql';
import PropertyType from './propertyType';

const Property = new GraphQLObjectType({
    name: 'Property',
    description: 'This represents a Property entry',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve (property) {
                    return property.id;
                }
            },
            contentNodeId: {
                type: GraphQLInt,
                resolve (property) {
                    return property.contentNodeId;
                }
            },
            propertyTypeId: {
                type: GraphQLInt,
                resolve (property) {
                    return property.propertyTypeId;
                }
            },
            versionId: {
                type: GraphQLString,
                resolve (property) {
                    return property.versionId;
                }
            },
            dataInt: {
                type: GraphQLInt,
                resolve (property) {
                    return property.dataInt;
                }
            },
            dataDate: {
                type: GraphQLString,
                resolve (property) {
                    return property.dataDate;
                }
            },
            dataNtext: {
                type: GraphQLString,
                resolve (property) {
                    return property.dataNtext;
                }
            },
            dataNvarchar: {
                type: GraphQLString,
                resolve (property) {
                    return property.dataNvarchar;
                }
            },
            value: {
                type: GraphQLString,
                resolve (property) {

                    if (property.dataNtext) {
                        return property.dataNtext;
                    }

                    if (property.dataNvarchar) {
                        return property.dataNvarchar;
                    }

                    if (property.dataInt) {
                        return property.dataInt;
                    }

                    if (property.dataDate) {
                        return property.dataDate;
                    }

                    return '';
                }
            },
            propertyType: {
                type: PropertyType,
                resolve (property) {
                    return property.getPropertyType();
                }
            },
            key: {
                type: GraphQLString,
                resolve(property){
                    return property.getPropertyType().then(function (propertyType) {
                        return propertyType.alias;
                    });
                }
            }
        };
    }
});

export default Property;