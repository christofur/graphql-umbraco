import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

const ChildNode = new GraphQLObjectType({
    name: 'ChildNode',
    description: 'This represents a Child Node entity',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve (childNode) {
                    return childNode.id;
                }
            },
            parentId: {
                type: GraphQLInt,
                resolve (childNode) {
                    return childNode.parentId;
                }
            },
            text: {
                type: GraphQLString,
                resolve (childNode) {
                    return childNode.text;
                }
            },
            sortOrder: {
                type: GraphQLInt,
                resolve (childNode) {
                    return childNode.sortOrder;
                }
            }
        };
    }
});

export default ChildNode;