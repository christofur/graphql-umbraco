import Query from '../query/query'
import {
    GraphQLSchema
} from 'graphql';

export function Schema(db){
    return new GraphQLSchema({
        query: Query(db)
    });
};
