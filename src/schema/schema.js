import Query from '../query/query'

export function Schema(db){
    return new GraphQLSchema({
        query: Query(db)
    });
};
