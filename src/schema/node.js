import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';

const Node = new GraphQLObjectType({
    name: 'Node',
    description: 'This represents a Node entity',
    fields: () => {
        return {
            nodeId: {
                type: GraphQLInt,
                resolve (node) {
                    return node.nodeId;
                }
            },
            text: {
                type: GraphQLString,
                resolve (node) {
                    return node.text;
                }
            },
            newest: {
                type: GraphQLBoolean,
                resolve (node) {
                    return node.newest;
                }
            },
            versionId: {
                type: GraphQLString,
                resolve (node) {
                    return node.versionId;
                }
            },
            properties: {
                type: new GraphQLList(Property),
                resolve (node) {
                    return node.getProperties().then(function(properties){
                        var latestProperties = [];

                        for(let i = 0; i < properties.length; i++)
                        {
                            if(properties[i].versionId === node.versionId)
                            {
                                latestProperties.push(properties[i]);
                            }
                        }

                        return latestProperties;

                    });
                }
            },
            children: {
                type: new GraphQLList(ChildNode),
                resolve(node){
                    return node.getChildNodes();
                }
            }
        };
    }
});

export default Node;