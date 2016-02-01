import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

const PropertyType = new GraphQLObjectType({
    name: 'PropertyType',
    description: 'This represents a Property Type entry',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve (propertyType) {
                    return propertyType.id;
                }
            },
            alias: {
                type: GraphQLString,
                resolve (propertyType) {
                    return propertyType.alias;
                }
            }
        };
    }
});

export default PropertyType;